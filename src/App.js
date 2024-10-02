import React from "react";
import { Routes, Route } from "react-router-dom";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import MobileRegister from "./pages/MobileRegister";
import PanVerification from "./pages/PanVerification";
import UserDetailsPage from "./pages/UserDetailsPage";
import AadharVerificationPage from "./pages/AadharVerificationPage";
import AddressPage from "./pages/AddressPage";
import Dashboard from "./pages/Dashboard";

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
      <Route path="/dashboard" element={<Dashboard />} />


    </Routes>
  );
}

export default App;
