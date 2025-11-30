import { useState } from 'react';
import { 
    TableContainer, 
    StyledTable, 
    TableHead, 
    TableHeader,
    TableRow, 
    TableData,
    TableNoData
} from './styled.js';

export default function TableFilter({ actions, data, header, onClickRow }) {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (item) => {
    setSelectedRow(item); 
    onClickRow(item);
  };

  return (
    <TableContainer>
      <StyledTable>
        <TableHead>
          <tr>
            {
              Object.keys(header).map((key) => (
                <TableHeader key={key}>{key}</TableHeader>
              ))
            }
            {!actions?.has("none") && (
              <TableHeader fixed="true">Ações</TableHeader>
            )}
          </tr>
        </TableHead>

        <tbody>
          {data.length > 0 ? data?.map((item, index) => (
            <TableRow 
              key={index} 
              onClick={() => handleRowClick(item)}
              selected={selectedRow === item}
            >
              {
                Object.keys(data[0]).map((key) => (
                  <TableData>{item[key]}</TableData>
                ))
              }
            </TableRow>
          )) : <TableRow> <TableNoData colSpan={Object.keys(header).length}> Ops, nenhum dado encontrado. </TableNoData> </TableRow>}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
}