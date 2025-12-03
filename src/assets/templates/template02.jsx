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

export default function ContractPDF02(props) {
    const {
        titleBudget,

        // Dados das partes
        contratante,
        cnpjContratante,
        enderecoContratante,
        contratado,
        cnpjContratado,
        enderecoContratado,

        // Dados do objeto e obra
        descricaoImovel,
        enderecoObra,
        servicosExecutados,
        materiaisInclusos,

        // Prazos
        prazoExecucaoDias,
        dataInicioObra,

        // Valores
        valorTotal,
        valorEntrada,
        dataEntrada,
        valorParcela2,
        dataParcela2,
        valorParcela3,
        periodoParcela3,
        engenheiroResponsavel,

        // Responsabilidade técnica
        garantiaViciosMeses,

        // Dados de rescisão e multa
        multaPercentual,

        // Assinatura
        dataAssinatura,
        testemunha1,
        testemunha2
    } = props;

    return (
        <Document>
            <Page size="A4" style={styles.page}>

                <Text style={styles.title}>{titleBudget}</Text>

                <Text style={styles.section}>
                    Pelo presente instrumento particular de contrato de prestação de serviço celebrado
                    entre {contratante}, inscrita no CNPJ sob nº {cnpjContratante}, localizada em
                    {` ${enderecoContratante}`}, e de outro lado o contratado {contratado},
                    inscrito no CNPJ nº {cnpjContratado}, residente em {enderecoContratado}.
                </Text>

                <Text style={styles.section}>
                    Têm entre os mesmos, de maneira justa e acordada, o presente {titleBudget},
                    ficando desde já aceito pelas cláusulas abaixo descritas.
                </Text>

                {/* CLÁUSULA 1 */}
                <Text style={styles.bold}>CLÁUSULA 1 - OBJETO DO CONTRATO</Text>
                <Text style={styles.section}>
                    O presente contrato tem como objeto o conserto do vazamento do imóvel comercial
                    {` ${descricaoImovel}`}, localizado em {enderecoObra}.
                </Text>

                <Text style={styles.section}>
                    PARÁGRAFO PRIMEIRO: A manutenção será executada nos exatos termos do que consta:
                    {` ${servicosExecutados}`}. Os materiais para a resolução do vazamento estão incluídos no orçamento,
                    sendo de responsabilidade do contratado – {materiaisInclusos}.
                </Text>

                <Text style={styles.section}>
                    PARÁGRAFO SEGUNDO: O empreiteiro limitar-se-á a executar o que consta neste contrato,
                    sob pena de o contratante rejeitá-la ou recebê-la com abatimento no preço.
                </Text>

                {/* CLÁUSULA 2 */}
                <Text style={styles.bold}>CLÁUSULA 2 - PRAZO PARA EXECUÇÃO</Text>
                <Text style={styles.section}>
                    O empreiteiro se compromete a executar a obra em {prazoExecucaoDias} dias,
                    iniciando-se no primeiro dia útil após {dataInicioObra}.
                </Text>

                <Text style={styles.section}>
                    PARÁGRAFO ÚNICO: Interrupções da execução não serão incluídas no prazo estipulado.
                </Text>

                {/* CLÁUSULA 3 */}
                <Text style={styles.bold}>CLÁUSULA 3 - EXECUÇÃO</Text>
                <Text style={styles.section}>
                    A execução das obras será feita pessoalmente pelo empreiteiro, facultando-lhe a
                    contratação de ajudantes sob sua total responsabilidade.
                </Text>

                <Text style={styles.section}>
                    PARÁGRAFO PRIMEIRO: O contratado fornecerá todos os materiais necessários.
                </Text>

                <Text style={styles.section}>
                    PARÁGRAFO SEGUNDO: O empreiteiro terá liberdade total para execução de suas tarefas.
                </Text>

                <Text style={styles.section}>
                    PARÁGRAFO TERCEIRO: Danos a terceiros decorrentes da obra serão de inteira
                    responsabilidade do empreiteiro.
                </Text>

                <Text style={styles.section}>
                    PARÁGRAFO QUARTO: Caso haja desperdício ou extravio de materiais, o empreiteiro
                    deverá restituí-los.
                </Text>

                <Text style={styles.section}>
                    PARÁGRAFO QUINTO: O empreiteiro se responsabilizará pelos vícios de construção
                    por {garantiaViciosMeses} meses após a conclusão.
                </Text>

                <Text style={styles.section}>
                    PARÁGRAFO SEXTO: É responsabilidade do empreiteiro garantir a segurança estrutural da obra
                    e utilizar EPIs adequados.
                </Text>

                {/* CLÁUSULA 4 */}
                <Text style={styles.bold}>CLÁUSULA 4 - PREÇO E FORMA DE PAGAMENTO</Text>
                <Text style={styles.section}>
                    O contratante pagará o valor total de R$ {valorTotal}.
                </Text>

                <Text style={styles.section}>
                    Entrada: R$ {valorEntrada} – {dataEntrada}.{"\n"}
                    Segunda parcela: R$ {valorParcela2} – {dataParcela2}.{"\n"}
                    Terceira parcela: R$ {valorParcela3} – {periodoParcela3}.{"\n"}
                    Pagamento mediante aprovação do Engenheiro {engenheiroResponsavel}.
                </Text>

                {/* CLÁUSULA 5 */}
                <Text style={styles.bold}>CLÁUSULA 5 - VISTORIAS</Text>
                <Text style={styles.section}>
                    O contratante poderá realizar vistorias a qualquer dia ou horário.
                </Text>

                {/* CLÁUSULA 6 */}
                <Text style={styles.bold}>CLÁUSULA 6 - RESCISÃO CONTRATUAL</Text>
                <Text style={styles.section}>
                    As partes poderão rescindir o contrato mediante aviso prévio de 30 dias.
                </Text>

                {/* CLÁUSULA 7 */}
                <Text style={styles.bold}>CLÁUSULA 7 - DA MULTA</Text>
                <Text style={styles.section}>
                    O descumprimento acarretará multa de {multaPercentual}% sobre o valor total do contrato.
                </Text>

                {/* DISPOSIÇÕES FINAIS */}
                <Text style={styles.bold}>DISPOSIÇÕES FINAIS</Text>
                <Text style={styles.section}>
                    O presente contrato passa a vigorar após assinatura pelas partes,
                    elegendo-se o foro de São Paulo – SP.
                </Text>

                <Text style={styles.section}>
                    São Paulo, {dataAssinatura}
                </Text>

                <Text style={styles.section}>
                    Testemunhas:{"\n"}
                    1. {testemunha1}{"\n"}
                    2. {testemunha2}
                </Text>

            </Page>
        </Document>
    );
}
