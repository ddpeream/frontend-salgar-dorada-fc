import { formCreatedDto } from "./player.interfase";

export const createPlayer = async (
  player: formCreatedDto
): Promise<formCreatedDto> => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const token = JSON.parse(localStorage.getItem("LOGIN") || "");
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(player),
  };
  try {
    const response = await fetch(`${BASE_URL}/players`, options);

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }

    const playerCreated = await response.json();
    if (!playerCreated) {
      throw new Error("Empty response");
    }

    return playerCreated;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
