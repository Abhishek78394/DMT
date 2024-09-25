import React, { useState } from 'react';
import { Container, Box, Typography, Button, TextField, Card, CardContent } from '@mui/material';

function LoginOtp() {
  const [otp, setOtp] = useState({ digit1: '', digit2: '', digit3: '', digit4: '', digit5: '', digit6: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOtp({
      ...otp,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const fullOtp = Object.values(otp).join('');
    console.log('OTP Submitted:', fullOtp);
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card sx={{ boxShadow: 3, borderRadius: 2, width: '100%' }}>
        <CardContent>
          {/* Google Logo */}
          <Box display="flex" justifyContent="center" mb={2}>
          <img
                src="PurnTechLogo.png"
                alt="Logo"
                style={{
                  width: "180px",
                  height: "80px",
                  display: "block",
                  margin: "0 auto",
                }}
              />
          </Box>

          {/* Title */}
          <Typography variant="h5" align="center" gutterBottom>
            Verify OTP
          </Typography>
          <Typography variant="body1" align="center" color="textSecondary" gutterBottom>
            Enter the OTP sent to your email/phone
          </Typography>

          {/* OTP Input Fields */}
          <Box display="flex" justifyContent="center" mt={2}>
            <TextField
              name="digit1"
              value={otp.digit1}
              onChange={handleChange}
              inputProps={{ maxLength: 1 }}
              sx={{ width: '40px', marginRight: '8px' }}
            />
            <TextField
              name="digit2"
              value={otp.digit2}
              onChange={handleChange}
              inputProps={{ maxLength: 1 }}
              sx={{ width: '40px', marginRight: '8px' }}
            />
            <TextField
              name="digit3"
              value={otp.digit3}
              onChange={handleChange}
              inputProps={{ maxLength: 1 }}
              sx={{ width: '40px', marginRight: '8px' }}
            />
            <TextField
              name="digit4"
              value={otp.digit4}
              onChange={handleChange}
              inputProps={{ maxLength: 1 }}
              sx={{ width: '40px', marginRight: '8px' }}
            />
            <TextField
              name="digit5"
              value={otp.digit5}
              onChange={handleChange}
              inputProps={{ maxLength: 1 }}
              sx={{ width: '40px', marginRight: '8px' }}
            />
            <TextField
              name="digit6"
              value={otp.digit6}
              onChange={handleChange}
              inputProps={{ maxLength: 1 }}
              sx={{ width: '40px' }}
            />
          </Box>

          {/* Submit Button */}
          <Box mt={3} display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleSubmit}
            >
              Verify
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default LoginOtp;
