import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Modal, Snackbar, Alert } from '@mui/material';

const CustomOtpModel = ({
  open,
  onClose,
  otpPrefix = 'P-',         
  otpLength = 4,             
  maskedContact,             
  onOtpSubmit,
  handleSubmit,             
  successMessage = 'OTP Verified Successfully!',
  errorMessage = 'Invalid OTP. Please try again.',
}) => {
  const defaultOtp = otpPrefix.split('').concat(Array(otpLength).fill(''));
  const [otp, setOtp] = useState(defaultOtp);  // Holds OTP input
  const [error, setError] = useState('');      // Holds error message state
  const [showNotification, setShowNotification] = useState(false);  // Controls Snackbar visibility
  const [notificationType, setNotificationType] = useState('success');  // Type of notification (success or error)

  useEffect(() => {
    if (open) {
      document.getElementById(`otp-input-${otpPrefix.length}`)?.focus();
    }
  }, [open, otpPrefix.length]);

  const handleInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value.toUpperCase();
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Backspace' && !otp[index] && index > otpPrefix.length) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const handleSubmitClick = () => {
    const enteredOtp = otp.join('');
    if (handleSubmit) {
      handleSubmit(enteredOtp, setError, setShowNotification, setNotificationType);
    } else {
      // onOtpSubmit(enteredOtp);
      if (enteredOtp === otpPrefix + '1234') {
        setError('');
        setNotificationType('success');
        setShowNotification(true);
        setOtp(defaultOtp);
        onClose()
      } else {
        setError(errorMessage);
        setNotificationType('error');
        setShowNotification(true);
        setOtp(defaultOtp);
      }
    }
  };

  const handleNotificationClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setShowNotification(false);
  };

  return (
    <>
      <Modal open={open} onClose={onClose}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: 'white',
            p: 4,
            borderRadius: 2,
            boxShadow: 24,
            width: 100,
            minWidth: 540,
            m: 'auto',
            mt: '20vh',
          }}
        >
          <Typography variant="h6" gutterBottom>
            {`Enter the OTP sent to ${maskedContact}`}
          </Typography>

          <Box display="flex" justifyContent="center" mb={2}>
            {otp.map((digit, index) => (
              <TextField
                key={index}
                id={`otp-input-${index}`}
                value={digit}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                inputProps={{
                  maxLength: 1,
                  style: {
                    textAlign: 'center',
                    width: '40px',
                    height: '40px',
                    fontSize: '20px',
                  },
                  readOnly: index < otpPrefix.length,  // Make the prefix non-editable
                }}
                sx={{ width: '50px', margin: '0 5px', bgcolor: '#f0f0f0', borderRadius: 1 }}
                variant="standard"
                error={!!error && index >= otpPrefix.length}
              />
            ))}
          </Box>

          {error && (
            <Typography variant="body1" color="red" mt={2}>
              {error}
            </Typography>
          )}

          <Button variant="contained" color="primary" onClick={handleSubmitClick}>
            Submit
          </Button>
        </Box>
      </Modal>

      <Snackbar
        open={showNotification}
        autoHideDuration={6000}
        onClose={handleNotificationClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleNotificationClose} severity={notificationType} sx={{ width: '100%' }}>
          {notificationType === 'success' ? successMessage : errorMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default CustomOtpModel;
