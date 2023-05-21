import { useContext } from 'react';
import { CandidatesContext } from '.';

export const useCandidates = () => {
  const context = useContext(CandidatesContext);

  if (!context) {
    throw new Error('useCandidates must be used within the CandidatesProvider');
  }

  return context;
};
