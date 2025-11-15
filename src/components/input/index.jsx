import { Container, Label, Field } from "./styled.js";

export default function Input({ label, value, onChange, placeholder, type = "text", width }) {
  return (
    <Container width={width}>
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
