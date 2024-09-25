import React, { useState } from 'react';
import { TextField, Grid, InputAdornment, FormControlLabel, Checkbox, Typography, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';
import { identifyInput } from '../services/constent';

const validateForm = (formValues) => {
  let errors = {};
  const inputType = identifyInput(formValues.email);

  if (!formValues.email) errors.email = "Email, ID, or Mobile is required";
  else if (inputType === 'Invalid input') errors.email = "Please enter a valid Email, Mobile Number, or ID";

  if (!formValues.password) errors.password = "Password is required";
  if (!formValues.agreeTerms) errors.agreeTerms = "You must agree to the terms of service";

  return errors;
};

const LoginForm = ({ onSubmit }) => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    agreeTerms: false,
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      onSubmit(formValues);  // Trigger the submit handler passed from Login.js
    }
  };

  return (
    <Grid container component="form" onSubmit={handleSubmit}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Email / Id / Mobile"
          name="email"
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
          value={formValues.password}
          onChange={handleChange}
          error={!!formErrors.password}
          helperText={formErrors.password}
          type="password"
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
      <FormControlLabel
        control={<Checkbox checked={formValues.agreeTerms} onChange={(e) => setFormValues((prev) => ({ ...prev, agreeTerms: e.target.checked }))} />}
        label={
          <Typography variant="body2" py={2}>
            I agree to the <Link to="/terms-of-service">Terms of service</Link>
          </Typography>
        }
      />
      {formErrors.agreeTerms && <Typography color="error">{formErrors.agreeTerms}</Typography>}
      <Button type="submit" fullWidth variant="contained" disabled={isSubmitting}>
        {isSubmitting ? 'Logging in...' : 'Login'}
      </Button>
    </Grid>
  );
};

export default LoginForm;
