import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: ${(props) => props.width || "100%"};
`;

export const Label = styled.label`
  font-weight: 600;
  color: #000;
  font-size: 15px;
`;

export const Field = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 14px;
  border: none;
  border-radius: 10px;
  outline: none;
  background-color: #f3f3f3;
  color: #000;
  font-size: 15px;
  font-weight: 500;
  transition: background-color 0.2s ease;

  &::placeholder {
    color: #999;
  }

  &:focus {
    background-color: #e9e9e9;
  }
`;
