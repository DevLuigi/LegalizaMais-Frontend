import { Container, Label, Select } from "./styled.js";

export default function InputSelect({ label, value, onChange, options = [], width }) {
  return (
    <Container width={width}>
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
