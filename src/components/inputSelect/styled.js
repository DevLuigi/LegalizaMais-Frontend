import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

export const Label = styled.label`
  font-weight: 600;
  margin-bottom: 5px;
  color: #000; /* visível sobre fundo claro */
  font-size: 15px;
`;

export const Field = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  background-color: #fff;
  color: #000;
  font-size: 14px;

  &::placeholder {
    color: #888;
    opacity: 1; /* garante visibilidade em todos os navegadores */
  }

  &:focus {
    border-color: #4a90e2;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  background-color: #fff;
  color: #000;
  font-size: 14px;
  transition: border 0.2s ease;

  &:focus {
    border-color: #0056b3;
  }
`;