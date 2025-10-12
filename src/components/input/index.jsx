import { Container, Label, Field, Select } from "./styled.js";

export default function Input(props) {
  return (
    <Container>
      <Label>{props.label}</Label>
      {props.selectOptions ? (
        <Select
          value={props.value}
          onChange={(e) => props.onChange && props.onChange(e.target.value)}
        >
          <option value="">Selecione</option>
          {props.selectOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      ) : (
        <Field
          type={props.type || "text"}
          value={props.value}
          onChange={(e) => props.onChange && props.onChange(e.target.value)}
          placeholder={props.placeholder}
        />
      )}
    </Container>
  );
}
