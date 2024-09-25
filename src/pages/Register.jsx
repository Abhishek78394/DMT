import React, { useState } from 'react';
import { Box, Container, TextField, Checkbox, Button, FormControlLabel, Typography, Grid, InputAdornment, Modal } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Link, useNavigate } from 'react-router-dom';
import OtpModal from '../components/OtpModal';
import { maskEmailOrMobile } from '../utils/helpers';
import { useDispatch } from 'react-redux';
import { setRegisterData } from '../redux/reducers/authReducer';

const Register = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });
  const  navigate  = useNavigate();
  const dispatch = useDispatch()
  const [formErrors, setFormErrors] = useState({});
  const [otpModalOpen, setOtpModalOpen] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    setFormValues({
      ...formValues,
      agreeTerms: e.target.checked,
    });
  };

  const validate = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formValues.name) errors.name = "Name is required";
    if (!formValues.email) errors.email = "Email is required";
    else if (!emailRegex.test(formValues.email)) errors.email = "Invalid email address";
    
    if (!formValues.password) errors.password = "Password is required";
    else if (formValues.password.length < 6) errors.password = "Password should be at least 6 characters";

    if (formValues.password !== formValues.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (!formValues.agreeTerms) errors.agreeTerms = "You must agree to the terms of service";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log('Form is valid. Proceed with signup.', formValues);
      setOtpModalOpen(true); 
    }
  };

  const handleOtpSubmit = (otpValue) => {
    console.log('OTP Submitted:', otpValue);
    setOtpModalOpen(false); 
    dispatch(setRegisterData(formValues));
    console.log(formValues)
    navigate('/')
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#fff',
          padding: { xs: 3, md: 2 },
          paddingX: { md: 10 },
          paddingY: { md: 5 },
          borderRadius: '12px',
          boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Box sx={{ width: { xs: '100%', md: '45%' } }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 3 }}>
            Sign up
          </Typography>

          <Grid container component="form">
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your Name"
                name="name"
                value={formValues?.name}
                onChange={handleChange}
                error={!!formErrors.name}
                helperText={formErrors.name}
                margin="normal"
                variant="standard"
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formValues?.email}
                onChange={handleChange}
                error={!!formErrors.email}
                helperText={formErrors.email}
                margin="normal"
                variant="standard"
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={formValues?.password}
                onChange={handleChange}
                error={!!formErrors.password}
                helperText={formErrors.password}
                margin="normal"
                variant="standard"
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Repeat your password"
                name="confirmPassword"
                type="password"
                value={formValues?.confirmPassword}
                onChange={handleChange}
                error={!!formErrors.confirmPassword}
                helperText={formErrors.confirmPassword}
                margin="normal"
                variant="standard"
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>

          <FormControlLabel
            control={<Checkbox checked={formValues?.agreeTerms} onChange={handleCheckboxChange} color="primary" />}
            label={
              <Typography variant="body2">
                I agree to all statements in{' '}
                <Link href="#" underline="always">
                  Terms of service
                </Link>
              </Typography>
            }
            sx={{ marginTop: 2 }}
          />

          {formErrors.agreeTerms && (
            <Typography variant="body2" color="error" sx={{ marginTop: 1 }}>
              {formErrors.agreeTerms}
            </Typography>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{
              marginTop: 3,
              padding: 1.5,
              fontSize: '16px',
              color: 'white',
              backgroundColor: '#007bff',
              ':hover': { backgroundColor: '#0056b3' },
            }}
          >
            Sign Up
          </Button>
        </Box>

        <Box
          sx={{
            width: { xs: '100%', md: '45%' },
            justifyContent: 'center',
            marginTop: { xs: 4, md: 0 },
          }}
        >
          <img
            src="signup-image.jpg"
            alt="Illustration"
            style={{ maxWidth: '90%', height: 'auto', borderRadius: '12px' }}
          />
          <Typography align="center" variant="body2" sx={{ marginTop: 3 }}>
            <Link to="/" underline="hover">
              I am already a member
            </Link>
          </Typography>
        </Box>
      </Container>

      <OtpModal 
        open={otpModalOpen} 
        onClose={() => setOtpModalOpen(false)}
        maskedContact={maskEmailOrMobile(formValues.email)}
        onOtpSubmit={handleOtpSubmit}
      />
    </Box>
  );
};

export default Register;