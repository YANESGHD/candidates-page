import { FunctionComponent } from 'react';
import { TableHead, TableCell, TableRow } from '@mui/material';
import { useColumns } from '../../../../contexts';

export const TableHeader: FunctionComponent = () => {
  const { columns } = useColumns();

  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell align='center'>{column}</TableCell>
        ))}
        <TableCell align='center'>state</TableCell>
        <TableCell align='center'>action</TableCell>
      </TableRow>
    </TableHead>
  );
};
