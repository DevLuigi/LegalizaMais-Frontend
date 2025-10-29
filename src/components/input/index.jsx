import { Container, Label, Field } from "./styled.js";

export default function Input({ label, value, onChange, placeholder, type = "text" }) {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Field
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
      />
    </Container>
  );
}
