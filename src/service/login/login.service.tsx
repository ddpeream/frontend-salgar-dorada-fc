import { Credentials } from "./credentials.interface";
import logger from "./logger";

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

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("LOGIN", JSON.stringify(data.access_token));
      return true;
    } else {
      throw new Error(data.message);
    }
  } catch (error: any) {
    logger.error(error.toString());
    if (error.response) {
      switch (error.response.status) {
        case 401:
          throw new Error("Credenciales incorrectas, por favor verifica tus datos.");
        case 404:
          throw new Error("Recurso no encontrado en el servidor.");
        default:
          throw new Error("Error en el servidor, por favor intenta más tarde.");
      }
    } else {
      throw new Error("Error de conexión, por favor verifica tu conexión a internet.");
    }
    return false;
  }
};
