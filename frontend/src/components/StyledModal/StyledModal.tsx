import { FunctionComponent } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { StyledCheckbox } from '../';

interface StyledModalProps {
  isOpen: boolean;
  title: string;
  options: string[];
  handleSubmit: () => void;
  handleChange: (value: any) => void;
  handleClose: () => void;
}

export const StyledModal: FunctionComponent<StyledModalProps> = ({
  title,
  isOpen,
  options,
  handleSubmit,
  handleChange,
  handleClose
}) => {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <StyledCheckbox handleChange={handleChange} options={options} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color='primary'>
          Cancelar
        </Button>
        <Button onClick={handleSubmit} color='primary'>
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
