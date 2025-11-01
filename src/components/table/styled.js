import styled from "styled-components";

const TableContainer = styled.div`
  max-height: 75vh;
  width: 85vw;
  overflow-y: auto;
  overflow-x: auto;
  border-radius: 16px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  background: #fff;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #476EE2;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #FFDA12;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #f3d00bff;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background: #f7f9fc;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const TableHeader = styled.th`
  padding: 12px 16px;
  color: #1e40af;
  background: #f7f9fc;
  border-bottom: 2px solid #e0e0e0;
  white-space: nowrap;

  ${(props) =>
    props.fixed &&
    `
    position: sticky;
    right: 0;
    background: #f7f9fc;
    box-shadow: -3px 0 4px -2px rgba(0,0,0,0.1);
    z-index: 10;
  `}
`;

const TableRow = styled.tr`
  transition: background 0.2s ease;

  &:nth-child(even) {
    background: #fafafa;
  }

  &:hover {
    background: #f1f5ff;
  }
`;

const TableData = styled.td`
  padding: 12px 16px;
  color: #333;
  text-align: left;
  border-bottom: 1px solid #e5e7eb;
  white-space: nowrap;
`;

const ActionCell = styled.td`
    display: flex;
    flex-direction: row;
    position: sticky;
    right: 0;
    background: #fff;
    border-bottom: 1px solid #e5e7eb;
    box-shadow: -3px 0 4px -2px rgba(0, 0, 0, 0.1);
    padding: 8px 12px;
    text-align: center;
    z-index: 9;
`;

const ActionButton = styled.button`
  border: none;
  outline: none;
  background: ${(props) => props.color}20;
  color: ${(props) => props.color};
  padding: 6px;
  margin: 0 4px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => props.color}40;
  }

  svg {
    vertical-align: middle;
  }
`;

export { 
    TableContainer, 
    StyledTable, 
    TableHead, 
    TableHeader,
    TableRow, 
    TableData, 
    ActionCell, 
    ActionButton 
};