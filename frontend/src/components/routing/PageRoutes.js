import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {
  Register,
  Login,
  ResetPassword,
  NotFound,
  Dashboard,
  FindExperts,
  ExpertProfiles,
  ExpertProfile,
  HireExpert,
  EditProfile,
} from '../pages';
import PrivateRoutes from './PrivateRoutes';

const PageRoutes = () => {
  return (
    <Routes>
      <Route exact path='/register' element={<Register />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/reset-password' element={<ResetPassword />} />
      <Route element={<PrivateRoutes />}>
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/experts' element={<ExpertProfiles />} />
        <Route exact path='/expert/:expertID' element={<ExpertProfile />} />
        <Route exact path='/find-experts' element={<FindExperts />} />
        <Route exact path='/hire-expert/:expertID' element={<HireExpert />} />
        <Route exact path='/edit-profile' element={<EditProfile />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default PageRoutes;
