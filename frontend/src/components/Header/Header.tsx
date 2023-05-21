import { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Button } from '@mui/material';
import styled from '@emotion/styled';
import HomeIcon from '@mui/icons-material/Home';
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
            <TextContainer>
              <Text>Candidates</Text>
              <Button
                variant='contained'
                color='secondary'
                onClick={() => setOpenModal(true)}
              >
                Columns
              </Button>
            </TextContainer>
            <IconButton component={Link} to='/home'>
              <HomeIcon sx={{ fontSize: 30, color: 'white' }} />
            </IconButton>
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
  justify-content: space-between;
  padding: 0 20px;
`;

const Text = styled.h2`
  font-weight: 600;
  padding-right: 30px;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
