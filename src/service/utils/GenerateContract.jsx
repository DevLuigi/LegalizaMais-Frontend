import {pdf} from "@react-pdf/renderer";
import { saveAs } from "file-saver";

export async function generateContract(props) {
    const PageComponent = props.page;
    const blob = await pdf(<PageComponent {...props.datas} />).toBlob();

    const fileName = props.fileName || PageComponent.name || "documento";

    saveAs(blob, `${fileName}.pdf`);
}