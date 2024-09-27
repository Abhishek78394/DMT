import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './screen/Dashboard';

function App() {

  return (
      <Routes>
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/login-otp" element={<LoginOtp />} />
        <Route path="/register" element={<SignupPage />} /> */}

        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Dashboard />} />

        {/* <Route path="/profile" element={<ProfileCard />} />
        <Route path="/account-settings" element={<Dashboard />} /> */}
      </Routes>
  );
}

export default App;
