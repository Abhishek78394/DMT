import React, { useState } from 'react';
import { Box, Container, TextField, Button, Typography, Grid, InputAdornment } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';



const SignIn = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formValues.email) errors.email = 'Email is required';
    else if (!emailRegex.test(formValues.email)) errors.email = 'Invalid email address';

    if (!formValues.password) errors.password = 'Password is required';
    else if (formValues.password.length < 6) errors.password = 'Password should be at least 6 characters';

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log('Form is valid. Proceed with login.', formValues);
    }
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
          padding: { xs: 3, md: 4 },
          paddingX: { md: 8 },
          paddingY: { md: 5 },
          borderRadius: '12px',
          boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Box sx={{ width: { xs: '100%', md: '50%' }, marginBottom: { xs: 4, md: 0 } }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 3 }}>
            Log in
          </Typography>

          <Grid container component="form">
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formValues.email}
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
                value={formValues.password}
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
          </Grid>

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
            Log In
          </Button>

          <Typography variant="body2" sx={{ marginTop: 2, textAlign: 'center' }}>
            Don't have an account?{' '}
            <Link to="/" underline="always">
              Sign up here
            </Link>
          </Typography>
        </Box>

        <Box
          sx={{
            width: { xs: '100%', md: '45%' },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src="signup-image.jpg"
            alt="Login Illustration"
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '12px',
              objectFit: 'contain',
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default SignIn;
