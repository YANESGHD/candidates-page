import { createContext, useState, useEffect, FunctionComponent } from 'react';
import { ColumnsContextData } from '../../interfaces';
import axios from 'axios';
import {
  getColumns,
  updateColumns,
  getAvailableColumns
} from '../../containers';

interface ColumnsProviderProps {
  children: React.ReactNode;
}

export const ColumnsContext = createContext<ColumnsContextData>({
  columns: [],
  availableColumns: [],
  handleColumnsUpdate: async (columns: string[]) => {}
});

export const ColumnsProvider: FunctionComponent<ColumnsProviderProps> = ({
  children,
}) => {
  const [columns, setColumns] = useState<string[] | []>([]);
  const [availableColumns, setAvailableColumns] = useState<string[] | []>([]);

  const handleColumnsUpdate = async (selectedColumns: string[]) => {
    axios(updateColumns(selectedColumns))
      .then((response) => setColumns(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios(getAvailableColumns())
      .then((response) => setAvailableColumns(response.data))
      .catch((error) => console.log(error));

    axios(getColumns())
      .then((response) => setColumns(response.data))
      .catch((error) => console.log(error));
  }, []);

  const contextValue = {
    columns,
    availableColumns,
    handleColumnsUpdate,
  };

  return (
    <ColumnsContext.Provider value={contextValue}>
      {children}
    </ColumnsContext.Provider>
  );
};
