import { FunctionComponent } from 'react';
import { Checkbox, FormGroup, FormControlLabel } from '@mui/material';

interface StyledCheckboxProps {
  handleChange: (reason: string) => void;
  options: string[]
}

export const StyledCheckbox: FunctionComponent<StyledCheckboxProps> = ({ handleChange, options }) => {
  return (
    <FormGroup>
      {options.map((option) => (
        <FormControlLabel
          key={option}
          control={<Checkbox name={option} />}
          label={option}
          onChange={() => handleChange(option)}
        />
      ))}
    </FormGroup>
  );
};
