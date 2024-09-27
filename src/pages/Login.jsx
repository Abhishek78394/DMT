import React, { useState, useCallback } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import LoginForm from '../components/LoginForm';
import CustomModal from '../components/CustomModal';
import { maskEmailOrMobile } from '../utils/helpers';
import { identifyInput } from '../services/constent';
import { useSelector } from 'react-redux';
import CustomSnackbar from '../components/common/CustomSnackbar';
import CustomOtpModel from '../components/common/CustomOtpModel';

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: '', 
    password: '',
    agreeTerms: false,
  });

  const [notification, setNotification] = useState({ show: false, type: 'success', message: '' });
  const registerData = useSelector((state) => state.auth.registerData);

  const [otpState, setOtpState] = useState({
    showOtpModal: false,
    showChooseOtpModal: false,
    otpMethod: '',
    maskedContact: '',
  });

  const handleOtpModal = useCallback((method) => {
    setOtpState({
      otpMethod: method,
      showOtpModal: true,
      maskedContact: maskEmailOrMobile(formValues.email),
      showChooseOtpModal: false,
    });
  }, [formValues.email]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((values) => {
    const inputType = identifyInput(values.email);

    if (inputType === 'AccountNumber' || inputType === 'ID') {
      setOtpState((prev) => ({
        ...prev,
        otpMethod: 'Account',
        showChooseOtpModal: true,
      }));
    } else if (inputType === 'Email' || inputType === 'Mobile') {
      if (inputType === 'Email' && values.email !== registerData.email) {
        setNotification({ show: true, type: 'error', message: 'This Email is not Registered.' });
        return;
      }
      if (inputType === 'Email' && values.password !== registerData.password) {
        setNotification({ show: true, type: 'error', message: 'Invalid credentials.' });
        return;
      }

      setOtpState((prev) => ({
        ...prev,
        showOtpModal: true,
        otpMethod: inputType,
        maskedContact: maskEmailOrMobile(values.email),
      }));
    }
  }, [registerData]);

  const handleOtpSubmit = useCallback((otp) => {
    console.log('OTP submitted:', otp);
    setOtpState((prev) => ({ ...prev, showOtpModal: false }));
  }, []);

  const handleNotificationClose = useCallback(() => {
    setNotification((prev) => ({ ...prev, show: false }));
  }, []);

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
            Don't have an account? <Button component="a" href="/">Sign up</Button>
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

      <CustomOtpModel 
        open={otpState.showOtpModal} 
        onClose={() => setOtpState((prev) => ({ ...prev, showOtpModal: false }))} 
        otpMethod={otpState.otpMethod}
        maskedContact={otpState.maskedContact}
        // onOtpSubmit={handleOtpSubmit}
      />

      <CustomSnackbar 
        open={notification.show} 
        onClose={handleNotificationClose} 
        severity={notification.type} 
        message={notification.message}
      />
    </Box>
  );
};

export default Login;
