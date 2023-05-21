import { backendUrl } from '../../config/envConfig';

export const getCandidates = () => ({
  method: 'get',
  url: `${backendUrl}/candidates`,
});

export const updateCandidate = (id: string, reason: any) => ({
  method: 'post',
  url: `${backendUrl}/candidates/${id}`,
  data: {
    reason
  }
});

export const getColumns = () => ({
  method: 'get',
  url: `${backendUrl}/columns`,
});

export const getAvailableColumns = () => ({
  method: 'get',
  url: `${backendUrl}/availableColumns`,
});

export const updateColumns = (selectedColumns: string[]) => ({
  method: 'post',
  url: `${backendUrl}/columns`,
  data: {
    selectedColumns
  }
});

export const getAvailableReasons = () => ({
  method: 'get',
  url: `${backendUrl}/availableReasons`,
});
