import React, { useState } from 'react';
import { Box, Typography, Button, Grid, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const UserDetailsDisplay = () => {
    const navigate = useNavigate();
    const [detail, setDetail] = useState({
        name: "Abhishek joshi",
        fatherName: "Mr. Suresh Joshi",
        dob: '18/06/2002'
    });

    // Define the handleBack function to simulate back navigation
    const handleBack = () => {
      console.log('Back button clicked');
      navigate('/pan-verification')
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#f5f5f5',
            }}
        >
            <Box
                sx={{
                    backgroundColor: '#fff',
                    borderRadius: 2,
                    padding: 4,
                    boxShadow: 3,
                    width: { xs: '90%', sm: 600, md: 700 },
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    position: 'relative',
                }}
            >
                {/* Back Arrow Icon */}
                <IconButton
                    onClick={handleBack}
                    sx={{
                        position: 'absolute',
                        top: { xs: 16, md: 10 },
                        left: { xs: 16, md: 24 },
                        zIndex: 1, 
                        backgroundColor: 'rgba(0, 0, 0, 0.04)', 
                        borderRadius: '50%', 
                        '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.1)', 
                        },
                    }}
                >
                    <ArrowBackIcon />
                </IconButton>

                {/* Left Side: Image */}
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: {xs: 4, md: 2},
                        marginBottom: { xs: 2, md: 0 },
                    }}
                >
                    <img
                        src="detail.webp" // Replace with the actual path to the image you want to display
                        alt="Related illustration"
                        style={{ width: '100%', maxWidth: '300px', height: 'auto' }}
                    />
                </Box>

                {/* Right Side: User Details */}
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h5" gutterBottom>
                        User Details
                    </Typography>

                    <Grid container spacing={2} justifyContent={'start'}>
                        <Grid item xs={12}>
                            <Typography variant="body1">
                                <strong>Full Name:</strong> {detail.name}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1">
                                <strong>Father's Name:</strong> {detail.fatherName}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1">
                                <strong>Date of Birth:</strong> {detail.dob}
                            </Typography>
                        </Grid>
                    </Grid>

                    <Button
                        onClick={()=>navigate('/adhar-verification')}
                        variant="contained"
                        sx={{ marginTop: 3, paddingX: 5 }}
                    >
                        Submit
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default UserDetailsDisplay;
