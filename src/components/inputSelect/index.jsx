import { Container, Label, Field, Select } from "./styled.js";

export default function InputSelect(props) {
  const { label, value, onChange, selectOptions, placeholder, type } = props;

  console.log("Placeholder recebido:", placeholder);

  return (
    <Container>
      {label && <Label>{label}</Label>}
      {selectOptions ? (
        <Select
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
        >
          <option value="">Selecione</option>
          {selectOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      ) : (
        <Field
          type={type || "text"}
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          placeholder={placeholder || ""}
        />
      )}
    </Container>
  );
}
