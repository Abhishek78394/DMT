import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { toast } from 'react-toastify';
import PersonalInfoModel from './PersonalInfoModel';

const PANCardInput = () => {
  const [panNumber, setPanNumber] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const value = e.target.value.toUpperCase().trim()
    setPanNumber(value);

    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;

    if (value.trim() === '') {
      setErrorMessage('Please enter a PAN number.');
    } if (value.length === 10) {
        if (!panRegex.test(value)) {
          setErrorMessage('Invalid PAN format. Use: ABCDE1234F'); 
    } else {
          setErrorMessage(''); 
    }
    } else {
      setErrorMessage('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate one more time before submitting
    if (errorMessage) {
      toast.error(errorMessage);
      return;
    }

    setIsVerified(true);
    toast.success('PAN Card verified successfully!');
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
        width: '100vw',
        position: 'absolute',
      }}
    >
      <Paper
        elevation={24}
        sx={{
          padding: '40px',
          borderRadius: '25px',
          maxWidth: '520px',
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
          Enter Your PAN Card Number
        </Typography>

        <Typography
          variant="h6"
          sx={{
            marginBottom: '20px',
            fontWeight: 'bold',
            color: '#fff',
          }}
        >
          Please enter your 10-digit PAN number (e.g., ABCDE1234F).
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TextField
            label="PAN Number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={panNumber}
            onChange={handleChange}
            error={Boolean(errorMessage)} // Set error state based on message
            helperText={errorMessage && errorMessage} // Show error message only if exists
            InputProps={{
              startAdornment: (
                <AccountBoxIcon sx={{ color: '#00d4ff', marginRight: '10px' }} />
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
            {isVerified ? 'Verified' : 'Verify PAN'}
            {isVerified && (
              <CheckCircleOutlineIcon sx={{ marginLeft: '10px' }} />
            )}
          </Button>
        </Box>
      </Paper>
      { isVerified && <PersonalInfoModel />}
    </Box>
  );
};

export default PANCardInput;
