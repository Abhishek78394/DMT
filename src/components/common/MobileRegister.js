import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper, InputAdornment } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { toast } from 'react-toastify';
import OTPVerify from './OTPVerify';

const MobileRegister = ({handleSubmit}) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [error, setError] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [isMobileOtpModelShow, setIsMobileOtpModelShow] = useState(false)

  const handleChange = (e) => {
    const value = e.target.value;
    setMobileNumber(value);

    // Basic validation for 10-digit mobile number
    if (!/^\d{10}$/.test(value)) {
      setError('Please enter a valid 10-digit mobile number');
    } else {
      setError('');
    }
  };

  const handleMobileSubmit = (e) => {
    e.preventDefault();
    if (error === '' && mobileNumber) {
      setIsRegistered(true);
      toast.success('Mobile number registered successfully!');
      setIsMobileOtpModelShow(true)
    } else {
      toast.error('Please enter a valid mobile number.');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(145deg, #1f2937, #3b4252)',
        padding: '20px',
        position: 'absolute',
        width: '100vw'
      }}
    >
      <Paper
        elevation={24}
        sx={{
          padding: '40px',
          borderRadius: '25px',
          maxWidth: '420px',
          width: '100%',
          textAlign: 'center',
          backdropFilter: 'blur(20px)',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.25)',
          position: 'relative',
        }}
      >
        {/* Decorative Glassmorphism Circle */}
        <Box
          sx={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.15)',
            boxShadow: '0 0 40px rgba(255, 255, 255, 0.2)',
            filter: 'blur(20px)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '-60px',
            left: '-60px',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            boxShadow: '0 0 50px rgba(255, 255, 255, 0.3)',
            filter: 'blur(30px)',
          }}
        />
        
        <Typography
          variant="h4"
          sx={{
            marginBottom: '20px',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #00d4ff, #1f80ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '2px',
            fontSize: '2rem',
          }}
        >
          Register Mobile
        </Typography>

        <Box
          component="form"
          onSubmit={handleMobileSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TextField
            label="Mobile Number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={mobileNumber}
            onChange={handleChange}
            error={!!error}
            helperText={error}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIcon sx={{ color: '#00d4ff' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.25)',
              borderRadius: '15px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
              '& .MuiOutlinedInput-root': {
                borderRadius: '15px',
                color: '#fff',
              },
              '& .MuiInputLabel-root': {
                color: '#fff',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#00d4ff',
              },
            }}
          />

          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{
              marginTop: '30px',
              padding: '12px 0',
              borderRadius: '30px',
              background: 'linear-gradient(135deg, #00d4ff, #1f80ff)',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              textTransform: 'uppercase',
              transition: 'all 0.4s ease',
              '&:hover': {
                background: 'linear-gradient(135deg, #1f80ff, #00d4ff)',
                transform: 'translateY(-2px)',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
              },
            }}
          >
            {isRegistered ? 'Registered' : 'Register'}
            {isRegistered && (
              <CheckCircleOutlineIcon sx={{ marginLeft: '10px' }} />
            )}
          </Button>
        </Box>
      </Paper>
      { isMobileOtpModelShow && <OTPVerify mobileNumber={mobileNumber.toString().slice(0, -4).replace(/\d/g, '*') + mobileNumber.slice(-4)} />} 
    </Box>
  );
};

export default MobileRegister;
