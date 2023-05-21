import { FunctionComponent, useState } from 'react';
import {
  TableBody,
  TableCell,
  TableRow,
  Button,
  ButtonProps,
} from '@mui/material';
import styled from '@emotion/styled';
import { Candidate } from '../../../../interfaces';
import { StyledModal } from '../../../../components';
import { useCandidates, useColumns } from '../../../../contexts';

interface StyledButtonProps extends ButtonProps {
  reason?: boolean;
}

const StyledButton = styled(Button)<StyledButtonProps>`
  background-color: ${(props) => (props.reason ? '#20bf55' : '#ff3e41')};

  &:hover {
    background-color: ${(props) =>
      props.reason ? '#20bf55 !important' : '#ff3e41 !important'};
  }
`;

export const TableContent: FunctionComponent = () => {
  const [openModal, setOpenModal] = useState(false);
  const [idSelected, setIdSelected] = useState('');
  const [reasons, setReasons] = useState('');

  const { candidates, handleCandidateUpdate, availableReasons } = useCandidates();
  const { columns } = useColumns();

  const handleReasons = (newReason: string) => {
    if (reasons.includes(newReason)) {
      setReasons(reasons.replace(newReason, ''));
    } else {
      setReasons(reasons.length!! ? `${reasons}, ${newReason}` : newReason);
    }
  };

  const handleSubmit = () => {
    handleCandidateUpdate(idSelected, reasons);
    setReasons('');
    setOpenModal(false);
  };

  const handleCandidateChange = (id: string, reason: string) => {
    if (!reason.length) {
      setIdSelected(id);
      setOpenModal(true);
      return;
    }

    handleCandidateUpdate(id, '');
  };

  return (
    <>
      <TableBody>
        {candidates.map((candidate: Candidate) => (
          <TableRow key={candidate.id}>
            {Object.entries(candidate).map(
              ([key, value]) =>
                columns.includes(key) && (
                  <TableCell component='th' scope='row' align='center'>
                    {value || '-'}
                  </TableCell>
                )
            )}
            <TableCell component='th' scope='row' align='center'>
              {candidate.reason ? 'Rechazado' : 'Aprobado'}
            </TableCell>
            <TableCell component='th' scope='row' align='center'>
              <StyledButton
                variant='contained'
                reason={(candidate.reason).length > 0}
                onClick={() =>
                  handleCandidateChange(candidate.id, candidate.reason)
                }
              >
                {candidate.reason ? 'Aprobar' : 'Rechazar'}
              </StyledButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>

      {openModal && (
        <StyledModal
          isOpen={openModal}
          title='Motivos'
          options={availableReasons}
          handleChange={handleReasons}
          handleSubmit={handleSubmit}
          handleClose={() => setOpenModal(false)}
        />
      )}
    </>
  );
};
