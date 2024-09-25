import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Modal, Snackbar, Alert } from '@mui/material';

const VALID_OTP = 'P-1243';

const OtpModal = ({ open, onClose, otpMethod, maskedContact, onOtpSubmit }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // 6 inputs for G-1243
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [showNotification, setShowNotification] = useState(false); // For controlling Snackbar

  const handleInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value.toUpperCase(); // Ensure uppercase for the letter
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (event, index) => {
    if (event.key === 'Backspace' && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp === VALID_OTP) {
      setError('');
      setSuccess(true);
      setShowNotification(true); // Show notification on successful OTP verification
      onOtpSubmit(enteredOtp);
    } else {
      setError('Invalid OTP. Please try again.');
      setSuccess(false);
    }
  };

  const handleNotificationClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setShowNotification(false); // Close notification
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
            minWidth: 480,
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
                }} // Increase size and make it square
                sx={{ width: '50px', margin: '0 5px', bgcolor: '#f0f0f0', borderRadius: 1 }}
                variant="standard"
                error={!!error}
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

      {/* Snackbar Notification */}
      <Snackbar
        open={showNotification}
        autoHideDuration={6000}
        onClose={handleNotificationClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleNotificationClose} severity="success" sx={{ width: '100%' }}>
          OTP Verified Successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default OtpModal;
