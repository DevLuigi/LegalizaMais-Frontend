import { Document, Page, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        padding: 40,
        fontSize: 12,
        lineHeight: 1.5
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center"
    },
    section: { marginBottom: 12 },
    bold: { fontWeight: "bold" }
});

export default function ContractPDF(props) {
    
    return (
        <Document>
            <Page size="A4" style={styles.page}>

                <Text style={styles.title}>
                    MINUTA - CONTRATO DE PRESTAÇÃO DE SERVIÇO DE CONSTRUÇÃO POR EMPREITADA
                </Text>

                <Text style={styles.section}>
                    Pelo presente instrumento particular de contrato de prestação de serviço celebrado entre
                    {` ${props.client.name}`} – inscrita no CNPJ sob nº {props.client.document}, localizada em
                    {` ${props.client.cep}`} e de outro lado o contratado {props.budget.user.name},
                    inscrito no CNPJ {props.budget.user.document}, residente em {props.budget.user.cep}.
                </Text>

                <Text style={styles.section}>
                    Têm entre os mesmos, de maneira justa e acordada, o presente contrato de {props.budget.descriptionService},
                    ficando desde já aceito pelas cláusulas abaixo descritas.
                </Text>

                <Text style={styles.bold}>CLÁUSULA 1 - OBJETO DO CONTRATO</Text>
                <Text style={styles.section}>
                    O presente contrato tem como objeto o serviço de {props.budget.descriptionService}, conforme orçamento
                    aprovado pelas partes.
                </Text>

                <Text style={styles.bold}>CLÁUSULA 4 - PREÇO E FORMA DE PAGAMENTO</Text>
                <Text style={styles.section}>
                    A título de mão de obra, fica ajustado que o contratante pagará ao contratado o valor total
                    de R$ {props.budget.total}.
                </Text>

                <Text style={styles.section}>
                    São Paulo, {props.inclusionDate}
                </Text>

                <Text style={{ marginTop: 40 }}>___________________________</Text>
                <Text>{props.client.name}</Text>
                <Text style={{ marginTop: 40 }}>___________________________</Text>
                <Text>{props.budget.user.name}</Text>

            </Page>
        </Document>
    );
}
