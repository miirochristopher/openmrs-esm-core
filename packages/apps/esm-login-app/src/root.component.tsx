import React from 'react';
import Login from './login/login.component';
import LocationPicker from './location-picker/location-picker.component';
import RedirectLogout from './redirect-logout/redirect-logout.component';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChangePassword from './change-password/change-password.component';

export interface RootProps {}

const Root: React.FC<RootProps> = () => {
  return (
    <BrowserRouter basename={window.getOpenmrsSpaBase()}>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="login/confirm" element={<Login />} />
        <Route path="login/location" element={<LocationPicker />} />
        <Route path="logout" element={<RedirectLogout />} />
        <Route path="change-password" element={<ChangePassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
