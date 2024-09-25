import React, { useState } from 'react';
import { Box, Container, TextField, Checkbox, Button, FormControlLabel, Typography, Grid, InputAdornment, Modal } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';

// Reusable Modal Component
const CustomModal = ({ open, onClose, title, content, actions }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="custom-modal-title"
      aria-describedby="custom-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          p: 4,
          borderRadius: '8px',
        }}
      >
        <Typography id="custom-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        {content}
        <Box mt={2}>
          {actions}
        </Box>
      </Box>
    </Modal>
  );
};

const Register = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });
  const [formErrors, setFormErrors] = useState({});
  const [otp, setOtp] = useState(''); // State for OTP input
  const [otpModalOpen, setOtpModalOpen] = useState(false); // State for OTP modal visibility

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    setFormValues({
      ...formValues,
      agreeTerms: e.target.checked,
    });
  };

  // Validation logic
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

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // If no errors, open the OTP modal
      console.log('Form is valid. Proceed with signup.', formValues);
      setOtpModalOpen(true); // Open the OTP modal
    }
  };

  // Handle OTP submit
  const handleOtpSubmit = () => {
    // Add logic to handle OTP submission (e.g., API call)
    console.log('OTP Submitted:', otp);
    setOtpModalOpen(false); // Close modal after successful OTP submission
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
        {/* Form Section */}
        <Box sx={{ width: { xs: '100%', md: '45%' } }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 3 }}>
            Sign up
          </Typography>

          <Grid container component="form">
            {/* Name Field */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your Name"
                name="name"
                value={formValues.name}
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

            {/* Email Field */}
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

            {/* Password Fields */}
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

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Repeat your password"
                name="confirmPassword"
                type="password"
                value={formValues.confirmPassword}
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

          {/* Terms of Service Checkbox */}
          <FormControlLabel
            control={<Checkbox checked={formValues.agreeTerms} onChange={handleCheckboxChange} color="primary" />}
            label={
              <Typography variant="body2">
                I agree to all statements in{' '}
                <Link href="#" underline="always">
                  Terms of service
                </Link>
              </Typography>
            }
            sx={{ marginTop: 2 }}
            error={!!formErrors.agreeTerms}
            helperText={formErrors.agreeTerms}
          />

          {formErrors.agreeTerms && (
            <Typography variant="body2" color="error" sx={{ marginTop: 1 }}>
              {formErrors.agreeTerms}
            </Typography>
          )}

          {/* Sign Up Button */}
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

        {/* Illustration Section */}
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

      {/* OTP Modal */}
      <CustomModal
        open={otpModalOpen}
        onClose={() => setOtpModalOpen(false)}
        title="Enter OTP"
        content={
          <TextField
            label="OTP"
            fullWidth
            variant="standard"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        }
        actions={
          <Button variant="contained" color="primary" onClick={handleOtpSubmit}>
            Submit OTP
          </Button>
        }
      />
    </Box>
  );
};

export default Register;
