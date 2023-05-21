import { createContext, useState, useEffect, FunctionComponent } from 'react';
import { CandidatesContextData, Candidate } from '../../interfaces';
import axios from 'axios';
import {
  getAvailableReasons,
  getCandidates,
  updateCandidate,
} from '../../containers';

interface CandidatesProviderProps {
  children: React.ReactNode;
}

export const CandidatesContext = createContext<CandidatesContextData>({
  candidates: [],
  availableReasons: [],
  handleCandidateUpdate: async () => {},
});

export const CandidatesProvider: FunctionComponent<CandidatesProviderProps> = ({
  children,
}) => {
  const [candidates, setCandidates] = useState<Candidate[] | []>([]);
  const [availableReasons, setAvailableReasons] = useState<string[] | []>([]);

  const handleCandidateUpdate = async (id: string, reason: string) => {
    axios(updateCandidate(id, reason))
      .then((response) => setCandidates(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios(getAvailableReasons())
      .then((response) => setAvailableReasons(response.data))
      .catch((error) => console.log(error));

    axios(getCandidates())
      .then((response) => setCandidates(response.data))
      .catch((error) => console.log(error));
  }, []);

  const contextValue = {
    candidates,
    availableReasons,
    handleCandidateUpdate
  };

  return (
    <CandidatesContext.Provider value={contextValue}>
      {children}
    </CandidatesContext.Provider>
  );
};
