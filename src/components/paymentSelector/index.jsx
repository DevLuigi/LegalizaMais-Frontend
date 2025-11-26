import { 
    Container, 
    Title, 
    OptionsGrid,
    Option,
    FakeCheckbox
} from "./styled";

export default function PaymentSelector({ value, onChange }) {

  const options = [
    { value: 1, label: "Cartão de crédito" },
    { value: 2, label: "Cartão de débito" },
    { value: 3, label: "Pix" },
  ];

  return (
    <Container>
      <Title>Formas de pagamento</Title>

      <OptionsGrid>
        {options.map((opt) => (
          <Option key={opt.value} onClick={() => onChange(opt.value)}>
            <FakeCheckbox checked={value === opt.value} />
            <label>{opt.label}</label>
          </Option>
        ))}
      </OptionsGrid>
    </Container>
  );
}