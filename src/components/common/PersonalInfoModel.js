import React, { useState } from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';
import AadhaarModel from './AadhaarModel';

const PersonalInfoDetails = ({ name= "Abhishek Joshi", fatherName= "Abhishek Joshi", dob= '18/06/2002' }) => {
const [isShow, setIsShow] = useState(false)

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
        position:'fixed'
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
        }}
      >
        <Typography
          variant="h4"
          sx={{
            marginBottom: '20px',
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #00d4ff, #1f80ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '2px',
          }}
        >
          Personal Information
        </Typography>

        <Box sx={{ marginTop: '20px', textAlign: 'left' }}>
          <Typography variant="h6" sx={{ color: '#fff', marginBottom: '10px' }}>
            Details:
          </Typography>
          <Typography variant="body1" sx={{ color: '#fff', marginBottom: '10px' }}>
            <strong>Name:</strong> {name}
          </Typography>
          <Typography variant="body1" sx={{ color: '#fff', marginBottom: '10px' }}>
            <strong>Father's Name:</strong> {fatherName}
          </Typography>
          <Typography variant="body1" sx={{ color: '#fff' }}>
            <strong>Date of Birth:</strong> {new Date(dob).toLocaleDateString()}
          </Typography>

          <Button
            variant="contained"
            type="submit"
            fullWidth
            onClick={()=>setIsShow(true)}
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
            Next
            
          </Button>
        </Box>
      </Paper>
      {isShow && <AadhaarModel />}
    </Box>
  );
};

export default PersonalInfoDetails;
