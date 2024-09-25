import React, { useState } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import LoginForm from '../components/LoginForm';
import OtpModal from '../components/OtpModal';
import CustomModal from '../components/CustomModal';
import { maskEmailOrMobile } from '../utils/helpers';
import { identifyInput } from '../services/constent';

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: '', 
    password: '',
    agreeTerms: false,
  });
  
  const [otpState, setOtpState] = useState({
    showOtpModal: false,
    showChooseOtpModal: false,
    otpMethod: '',
    maskedContact: '',
  });

  const handleOtpModal = (method) => {
    const maskedContact = maskEmailOrMobile(formValues.email); // Mask email/mobile for display
    setOtpState({
      ...otpState,
      otpMethod: method, 
      showOtpModal: true,
      maskedContact,
      showChooseOtpModal: false, 
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (values) => {
    const inputType = identifyInput(values.email); 
    if (inputType === 'AccountNumber' || inputType === 'ID') {
      setOtpState((prev) => ({
        ...prev,
        otpMethod: 'Account', 
        showChooseOtpModal: true, 
      }));
    } 
    else if (inputType === 'Email' || inputType === 'Mobile') {
      setOtpState((prev) => ({
        ...prev,
        showOtpModal: true,
        otpMethod: inputType, 
        maskedContact: maskEmailOrMobile(values.email), 
      }));
    } else {
      console.log("Invalid input");
    }
  };

  const handleOtpSubmit = (otp) => {
    console.log('OTP submitted:', otp);
    setOtpState((prev) => ({ ...prev, showOtpModal: false }));
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#f5f5f5">
      <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'space-between', p: 5, bgcolor: 'white', borderRadius: '12px', boxShadow: 3 }}>
        <Box width="45%">
          <Typography variant="h4" gutterBottom>Sign In</Typography>
          <LoginForm onSubmit={handleSubmit} onChange={handleChange} />
        </Box>
        <Box width="45%" textAlign="center">
          <img src="signup-image.jpg" alt="Illustration" style={{ maxWidth: '90%', borderRadius: '12px' }} />
          <Typography variant="body2" mt={2}>
            Don't have an account? <Button component="a" href="/sign-up">Sign up</Button>
          </Typography>
        </Box>
      </Container>

      <CustomModal
        open={otpState.showChooseOtpModal}
        onClose={() => setOtpState((prev) => ({ ...prev, showChooseOtpModal: false }))}
        title="How would you like to receive your OTP?"
        content={<Typography variant="body1">Please select where you'd like to receive your OTP.</Typography>}
        actions={
          <>
            <Button variant="contained" onClick={() => handleOtpModal('Email')}>Send OTP via Email</Button>
            <Button variant="contained" onClick={() => handleOtpModal('Mobile')}>Send OTP via Mobile</Button>
          </>
        }
      />

      <OtpModal 
        open={otpState.showOtpModal} 
        onClose={() => setOtpState((prev) => ({ ...prev, showOtpModal: false }))}
        otpMethod={otpState.otpMethod}
        maskedContact={otpState.maskedContact}
        onOtpSubmit={handleOtpSubmit}
      />
    </Box>
  );
};

export default Login;
