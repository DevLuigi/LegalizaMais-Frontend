import { Pencil, Trash2, FileText, Mail, MessageCircleMore } from "lucide-react";
import { 
    TableContainer, 
    StyledTable, 
    TableHead, 
    TableHeader,
    TableRow, 
    TableData, 
    ActionCell, 
    ActionButton 
} from './styled.js';

export default function Table({ actions, data }) {
  return (
    <TableContainer>
      <StyledTable>
        <TableHead>
          <tr>
            {
              Object.keys(data[0]).map((key) => (
                <TableHeader key={key}>{key}</TableHeader>
              ))
            }
            {!actions?.has("none") && (
              <TableHeader fixed="true">Ações</TableHeader>
            )}
          </tr>
        </TableHead>

        <tbody>
          {data?.map((item, index) => (
            <TableRow key={index}>
              {
                Object.keys(data[0]).map((key) => (
                  <TableData>{item[key]}</TableData>
                ))
              }
              {
                !actions?.has("none") && (
                  <ActionCell>
                    {actions?.has("edit") && (
                      <ActionButton color="#d0d318">
                        <Pencil size={16} onClick={() => actions.get('edit')()} />
                      </ActionButton>
                    )}

                    {actions?.has("delete") && (
                      <ActionButton color="#d32f2f">
                        <Trash2 size={16} onClick={() => actions.get('delete')()} />
                      </ActionButton>
                    )}

                    {actions?.has("PDF") && (
                      <ActionButton color="#1976d2">
                        <FileText size={16} onClick={() => actions.get('PDF')()} />
                      </ActionButton>
                    )}

                    {actions?.has("email") && (
                      <ActionButton color="#1976d2">
                        <Mail size={16} onClick={() => actions.get('email')()} />
                      </ActionButton>
                    )}

                    {actions?.has("whatsapp") && (
                      <ActionButton color="#1976d2">
                        <MessageCircleMore size={16} onClick={() => actions.get('whatsapp')()} />
                      </ActionButton>
                    )}

                  </ActionCell>
                )
              }
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
}