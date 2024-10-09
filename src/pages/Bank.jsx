import React, { useState } from "react";
import {
  Box,
  Container,
  Button,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  IconButton
} from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import OtpModal from "../common/OtpModal";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const BankDetails = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [reEnterAccountNumber, setReEnterAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [formErrors, setFormErrors] = useState({});
  
  const navigate = useNavigate();

  const validateIfscCode = (code) => /^[A-Z]{3}[A-Z0-9]{0,12}$/i.test(code);

  const validateForm = () => {
    const errors = {};

    if (!accountNumber) {
      errors.accountNumber = "Account number is required";
    } else if (accountNumber.length < 9 || accountNumber.length > 18) {
      errors.accountNumber = "Account number must be between 9 and 18 digits";
    }

    if (!reEnterAccountNumber) {
      errors.reEnterAccountNumber = "Re-enter account number is required";
    } else if (reEnterAccountNumber !== accountNumber) {
      errors.reEnterAccountNumber = "Account numbers do not match";
    }

    if (!ifscCode) {
      errors.ifscCode = "IFSC code is required";
    } else if (!validateIfscCode(ifscCode)) {
      errors.ifscCode = "Invalid IFSC code format";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success("Bank detiils add successfully.")
      navigate('/dashboard')
    }
  };


  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          backgroundColor: "#fff",
          padding: 5,
          borderRadius: "12px",
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: { xs: 4, md: 0 },
          }}
        >
          <img
            src="bank.jpg"
            alt="Illustration"
            style={{ maxWidth: "90%", height: "auto", borderRadius: "12px" }}
          />
        </Box>

        <Box sx={{ width: { xs: "100%", md: "45%" } }}>
          <Typography variant="h4" sx={{ fontWeight: "semibold", marginBottom: 3 }}>
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
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CreditCardIcon />
                      </InputAdornment>
                    ),
                  }}
                  error={!!formErrors.accountNumber}
                  helperText={formErrors.accountNumber}
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
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CreditCardIcon />
                      </InputAdornment>
                    ),
                  }}
                  error={!!formErrors.reEnterAccountNumber}
                  helperText={formErrors.reEnterAccountNumber}
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
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountBalanceIcon />
                      </InputAdornment>
                    ),
                  }}
                  error={!!formErrors.ifscCode}
                  helperText={formErrors.ifscCode}
                  className="bank-verification-input"
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ marginTop: 3, padding: 1.5 }}
            >
              Register
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default BankDetails;
