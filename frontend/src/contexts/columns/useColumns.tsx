import { useContext } from 'react';
import { ColumnsContext } from '.';

export const useColumns = () => {
  const context = useContext(ColumnsContext);

  if (!context) {
    throw new Error('useColumns must be used within the ColumnsProvider');
  }

  return context;
};
