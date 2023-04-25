import { Credentials } from "./credentials.interface";
import axios from 'axios';
import logger from "./logger";

export const loginUser = async (credentials: Credentials): Promise<boolean> => {
  const BASE_URL = process.env.REACT_APP_BASE_URL_PRO;
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
      "Access-Control-Allow-Headers": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
      "Access-Control-Allow-Credentials": "true"
    }
  };  
  try {
    
    const response = await axios.post(`https://${BASE_URL}/auth/login`, credentials, config);

    const data = response.data;
    console.log('Fetch: ', data, response)
    if (response.status === 201) {
      localStorage.setItem("LOGIN", JSON.stringify(data.access_token));
      return true;
    } else {
      throw new Error(data.message);
    }
  } catch (error: any) {
    logger.error(error);
    console.log('El verdadero error de axios: ', error)
    if (error.response) {
      switch (error.response.status) {
        case 401:
          throw new Error(
            "Credenciales incorrectas, por favor verifica tus datos."
          );
        case 404:
          throw new Error("Recurso no encontrado en el servidor.");
        default:
          throw new Error("Error en el servidor, por favor intenta más tarde.");
      }
    } else {
      throw new Error(
        "Error de conexión, por favor verifica tu conexión a internet."
      );
    }
  }
};
