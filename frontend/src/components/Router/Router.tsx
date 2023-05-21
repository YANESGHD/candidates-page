import { FunctionComponent } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Candidates } from '../../containers';

export const Router: FunctionComponent = () => {
  return (
    <Routes>
      <Route path='/candidates' element={<Candidates />} />
      <Route path='*' element={<Navigate replace to='/candidates' />} />
    </Routes>
  );
};
