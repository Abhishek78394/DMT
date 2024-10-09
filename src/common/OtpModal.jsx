import React, { useEffect, useState } from 'react';
import { Modal, Box, Typography, TextField, Button, Grid } from '@mui/material';

const OtpModal = ({ open, handleClose, email, otpCode, onSubmit, label }) => {
  const [otp, setOtp] = useState([otpCode[0] || '', otpCode[1] || '', '', '', '', '']);
  const [newLabel, setNewLabel] = useState(label || `Enter the OTP sent to ${email}`);

  useEffect(() => {
    setNewLabel(label || `Enter the OTP sent to ${email}`);
  }, [label, email]);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    let newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.value !== "" && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === '' && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const handleSubmit = () => {
    const otpValue = otp.join('');
    onSubmit(otpValue); 
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="otp-modal-title"
      aria-describedby="otp-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: 400, md: 500 }, 
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          textAlign: 'center',
        }}
      >
        <Typography id="otp-modal-title" variant="h6" sx={{ marginBottom: 2 }}>
         {newLabel}
        </Typography>

        <Grid container spacing={1} justifyContent="center" direction="row">
          {otp.map((data, index) => (
            <Grid item key={index}>
              <TextField
                inputProps={{
                  maxLength: 1,
                  style: { textAlign: 'center', fontSize: '16px' },
                  id: `otp-input-${index}`,
                }}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                sx={{ width: 45 }}
                disabled={index < 2}  // Disable the first two inputs
              />
            </Grid>
          ))}
        </Grid>

        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{ marginTop: 3, paddingX: 5 }}
        >
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

export default OtpModal;
