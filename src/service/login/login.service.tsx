import { Credentials } from "./credentials.interface";

export const loginUser = async (credentials: Credentials): Promise<boolean> => {
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  try {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    console.log("logueo: ");
    const data = await response.json();
    console.log("logueo: ", data.access_token);
    if (response.ok) {
      localStorage.setItem("LOGIN", JSON.stringify(data.access_token));
      return true;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
