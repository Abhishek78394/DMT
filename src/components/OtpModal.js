import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Modal, Snackbar, Alert } from '@mui/material';

const VALID_OTP = 'P-1234';

const OtpModal = ({ open, onClose, otpMethod, maskedContact, onOtpSubmit }) => {
  const [otp, setOtp] = useState(['P', '-', '', '', '', '']);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState('success'); // Track success or error

  useEffect(() => {
    if (open) {
      document.getElementById('otp-input-2')?.focus();
    }
  }, [open]);

  const handleInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value.toUpperCase();
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Backspace' && !otp[index] && index > 2) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp === VALID_OTP) {
      setError('');
      setSuccess(true);
      setShowNotification(true);
      setNotificationType('success'); 
      setOtp(['P', '-', '', '', '', ''])
      onOtpSubmit(enteredOtp);
    } else {
      setError('Invalid OTP. Please try again.');
      setSuccess(false);
      setOtp(['P', '-', '', '', '', ''])
      setShowNotification(true);
      setNotificationType('error'); // Show error notification
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
                  readOnly: index < 2, 
                }}
                sx={{ width: '50px', margin: '0 5px', bgcolor: '#f0f0f0', borderRadius: 1 }}
                variant="standard"
                error={!!error && index >= 2}
              />
            ))}
          </Box>

          {success && (
            <Typography variant="h6" color="green" mt={2}>
              OTP is valid! Login Successful!
            </Typography>
          )}
          {!success && error && (
            <Typography variant="body1" color="red" mt={2}>
              {error}
            </Typography>
          )}

          <Button variant="contained" color="primary" onClick={handleSubmit}>
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
        <Alert 
          onClose={handleNotificationClose} 
          severity={notificationType}  // Show success or error
          sx={{ width: '100%' }}
        >
          {notificationType === 'success' 
            ? 'OTP Verified Successfully!' 
            : 'Invalid OTP. Please try again.'}
        </Alert>
      </Snackbar>
    </>
  );
};

export default OtpModal;
