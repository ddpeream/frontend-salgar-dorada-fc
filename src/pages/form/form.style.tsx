import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #e9ebf0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 40px;
  height: 45px;
  justify-self: center;
  box-shadow: 0px 4px 4px hsla(0, 0%, 0%, 0.25);
  border-radius: 25%;
`;

export const Form = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 32px;
`;

export const FormCard = styled.div`
  width: 86%;
  height: 60vh;
  background: white;
`;

export const Title = styled.h4`
  text-align: center;
`;

export const Error = styled.p`
  color: red;
`
