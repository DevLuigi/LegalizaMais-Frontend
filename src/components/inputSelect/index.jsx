import { Container, Label, Select } from "./styled.js";

export default function InputSelect({ label, value, onChange, options = [] }) {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Select value={value} onChange={(e) => onChange?.(e.target.value)}>
        <option value="">Selecione</option>
        {options.map((option) => (
          <option
            key={option.value ?? option}
            value={option.value ?? option}
          >
            {option.label ?? option}
          </option>
        ))}
      </Select>
    </Container>
  );
}
