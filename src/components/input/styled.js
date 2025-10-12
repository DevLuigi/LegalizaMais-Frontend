import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  font-weight: 600;
  margin-bottom: 4px;
  font-size: 0.9rem;
`;

const Field = styled.input`
  background-color: #f3f3f3;
  border: none;
  border-radius: 0.8em;
  padding: 0.9em;
  font-size: 0.95rem;
  outline: none;

  &:focus {
    background-color: #ebebeb;
  }
`;

const Select = styled.select`
  background-color: #f3f3f3;
  border: none;
  border-radius: 0.8em;
  padding: 0.9em;
  font-size: 0.95rem;
  outline: none;
`;

export { Container, Label, Field, Select };
