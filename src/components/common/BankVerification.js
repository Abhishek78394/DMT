import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import './BankVerification.css';
import { toast } from 'react-toastify';

const BankVerification = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [reEnterAccountNumber, setReEnterAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (accountNumber === reEnterAccountNumber) {
      console.log('Account Number:', accountNumber);
      console.log('IFSC Code:', ifscCode);
    //   toast.success('Ban')
      // Proceed with the verification process
    } else {
      toast.error('Account numbers do not match. Please try again.');
    }
  };

  return (
    <Box className="bank-verification-container">
      <Paper className="bank-verification-paper">
        <Typography variant="h4" className="bank-verification-title">
          Bank Verification
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Account Number"
                variant="outlined"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                required
                className="bank-verification-input"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Re-enter Account Number"
                variant="outlined"
                value={reEnterAccountNumber}
                onChange={(e) => setReEnterAccountNumber(e.target.value)}
                required
                className="bank-verification-input"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="IFSC Code"
                variant="outlined"
                value={ifscCode}
                onChange={(e) => setIfscCode(e.target.value)}
                required
                className="bank-verification-input"
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="bank-verification-submit-btn"
          >
            Verify
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default BankVerification;
