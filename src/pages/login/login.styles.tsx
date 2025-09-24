import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`;

export const ContainerLogin = styled.div`
  width: 50%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100px;
  margin-bottom: 48px;
  justify-self: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25%;
`;

export const ContainerForm = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  width: 300px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  & a {
    color: #acd9b2;
    font-size: 14px;
    text-align: center;
    text-decoration: none;
    margin-bottom: 52px;
  }
`;

export const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > * {
    margin: 10px 0;
    padding: 10px 0;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  background-color: #f7f7f7;
  border: none;
  border-radius: 8px;
  height: 30px;
  font-size: 16px;
  padding: 6px;
  margin-bottom: 12px;
`;

export const SendBoton = styled.input`
  background-color: #3A3A73;
  border-radius: 8px;
  border: none;
  color: #acd9b2;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  height: 50px;
  margin-top: 7px;
  margin-bottom: 15px;
`;

export const SingUpButton = styled.button`
  background-color: #3A3A73;
  border-radius: 8px;
  border: 1px solid #acd9b2;
  color: #acd9b2;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  height: 50px;
`;

export const Error = styled.p`
  color: red;
`
