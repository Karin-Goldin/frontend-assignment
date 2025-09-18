import * as React from 'react';
import MuiTable, { TableProps } from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { TableCellProps } from '@mui/material/TableCell';
import TableContainer, {
  TableContainerProps,
} from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type Props<T extends Object> = {
  tableContainerProps?: TableContainerProps;
  columns: string[];
  itemIdentifier: keyof T;
  items: T[];
  bodyCell: {
    render: (row: T, column: string) => React.ReactNode;
    props?: TableCellProps;
  };
  headCell: {
    render: (column: string) => React.ReactNode;
    props?: TableCellProps;
  };
  onRowClick?: (row: T) => void;
} & TableProps;

export const Table = <T extends Object>({
  tableContainerProps,
  itemIdentifier,
  items,
  columns,
  headCell,
  bodyCell,
  onRowClick,
  ...props
}: Props<T>) => {
  return (
    <TableContainer {...tableContainerProps} component={Paper}>
      <MuiTable {...props}>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column} {...headCell.props}>
                {headCell.render(column)}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row, index) => (
            <TableRow
              key={`${row[itemIdentifier]}-${index}`}
              onClick={() => onRowClick?.(row)}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
                '&:hover': {
                  backgroundColor: '#2196F314',
                },
                cursor: onRowClick ? 'pointer' : 'default',
              }}
            >
              {columns.map((column) => (
                <TableCell {...bodyCell.props}>
                  {bodyCell.render(row, column)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};
