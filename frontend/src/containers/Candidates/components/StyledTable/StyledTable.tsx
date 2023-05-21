import { FunctionComponent } from 'react';
import { TableContainer, Table, Paper } from '@mui/material';
import { TableHeader, TableContent } from '.';

export const StyledTable: FunctionComponent = () => (
  <TableContainer component={Paper} style={{ margin: 'auto' }}>
    <Table>
      <TableHeader />
      <TableContent />
    </Table>
  </TableContainer>
);
