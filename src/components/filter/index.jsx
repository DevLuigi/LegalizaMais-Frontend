import { Container } from "./styled"

export default function Filer({ placeholder, onChange, value }) {
    return(
        <Container>
            <input placeholder={placeholder} onChange={(e) => onChange(e.target.value)} value={value} />
        </Container>
    )
}