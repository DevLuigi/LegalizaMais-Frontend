import styled from "styled-components";

// Fundo com degradê azul e centralização do conteúdo
export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #4da8ff, #cce7ff);
`;

// Card central
export const Card = styled.div`
  background: #ffffff;
  width: 360px;
  padding: 40px 35px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #d1d9e6;
  text-align: center;
`;

// Título “Login”
export const Title = styled.h2`
  color: #003399;
  font-weight: 700;
  margin-bottom: 25px;
  font-family: "Poppins", sans-serif;
`;

// Labels e inputs
export const Label = styled.label`
  display: block;
  text-align: left;
  color: #333;
  font-size: 14px;
  margin-bottom: 6px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  height: 38px;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  margin-bottom: 18px;
  padding: 8px 10px;
  font-size: 14px;
  outline: none;
  transition: border 0.2s ease-in-out;

  &:focus {
    border-color: #003399;
  }
`;

// Botão azul
export const Button = styled.button`
  width: 100%;
  height: 42px;
  background: #1a49ff;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  margin-top: 10px;

  &:hover {
    background: #003be3;
  }
`;

// Texto de cadastro
export const SignupText = styled.p`
  font-size: 13px;
  color: #333;
  margin-top: 5px;

  a {
    color: #1a49ff;
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`;
