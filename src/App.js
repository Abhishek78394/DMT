import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./screen/Dashboard";
import Register from "./pages/Register";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import MobileRegister from "./pages/MobileRegister";
import PanVerification from "./pages/PanVerification";
import UserDetailsPage from "./pages/UserDetailsPage";
import AadharVerificationPage from "./pages/AadharVerificationPage";
import AddressPage from "./pages/AddressPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/mobile-verification" element={<MobileRegister />} />
      <Route path="/pan-verification" element={<PanVerification />} />
      <Route path="/user-detail" element={<UserDetailsPage />} />
      <Route path="/adhar-verification" element={<AadharVerificationPage />} />
      <Route path="/address" element={<AddressPage />} />

      {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/login-otp" element={<LoginOtp />} />
        <Route path="/register" element={<SignupPage />} /> */}

      <Route path="/sign-up" element={<Register />} />

      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Dashboard />} />

      {/* <Route path="/profile" element={<ProfileCard />} />
        <Route path="/account-settings" element={<Dashboard />} /> */}
    </Routes>
  );
}

export default App;
