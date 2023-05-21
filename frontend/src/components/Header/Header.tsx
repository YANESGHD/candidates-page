import { FunctionComponent, useState } from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import styled from '@emotion/styled';
import { StyledModal } from '../StyledModal';
import { useColumns } from '../../contexts';

export const Header: FunctionComponent = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedColumns, setSelectedColumns] = useState<string[]>([]);

  const { availableColumns, handleColumnsUpdate } = useColumns();

  const handleSubmit = () => {
    handleColumnsUpdate(selectedColumns);
    setSelectedColumns([]);
    setOpenModal(false);
  };

  const handleChange = (column: string) => {
    if (selectedColumns.includes(column)) {
      setSelectedColumns(selectedColumns.filter((item) => item !== column));
    } else {
      setSelectedColumns((prevState) => [...prevState, column]);
    }
  };

  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <Container>
            <Text>Candidates</Text>
            <Button
              variant='contained'
              color='secondary'
              onClick={() => setOpenModal(true)}
            >
              Columns
            </Button>
          </Container>
        </Toolbar>
      </AppBar>
      {openModal && (
        <StyledModal
          isOpen={openModal}
          title='Columnas'
          options={availableColumns}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleClose={() => setOpenModal(false)}
        />
      )}
    </>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const Text = styled.h2`
  font-weight: 600;
  padding-right: 30px;
`;
