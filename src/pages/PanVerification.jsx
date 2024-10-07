import React, { useState } from "react";
import {
  Box,
  Container,
  Button,
  Grid,
  Typography,
  TextField,
  InputAdornment
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import OtpModal from "../common/OtpModal"; 
import PanToolIcon from '@mui/icons-material/PanTool';
import { toast } from "react-toastify";

const PanRegistration = () => {
  const [formValues, setFormValues] = useState({
    pan: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const otpCode = 'P-1234'; 
  const navigate = useNavigate();
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value.toUpperCase().trim(),
    }));
  };

  const validate = () => {
    const errors = {};
    const panPattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    if (!formValues.pan) {
      errors.pan = "PAN number is required";
    } else if (!panPattern.test(formValues.pan)) {
      errors.pan = "Please enter a valid 10-digit PAN number (e.g., ABCDE1234F)";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      // setIsOtpModalOpen(true);
      toast.success("Pan verified successfully.");
      navigate('/user-detail')
    }
  };

  const handleOtpSubmit = (otpValue) => {
    if (otpCode === otpValue) {
      toast.success("Pan verified successfully.");
      navigate('/user-detail')
    } else {
      toast.error("OTP verification failed. Please try again.");
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
          paddingY: 8,
          borderRadius: "12px",
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "45%" } }}>
          <Typography variant="h6" sx={{ fontWeight: "semibold", marginBottom: 3 }}>
          Please enter your 10-digit PAN number (e.g., ABCDE1234F).
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="PAN Card Number"
                  name="pan"
                  type="text"
                  value={formValues.pan}
                  onChange={handleChange}
                  error={!!formErrors.pan}
                  helperText={formErrors.pan}
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PanToolIcon />
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
              sx={{ marginTop: 3, padding: 1.5 }}
            >
              Register
            </Button>
          </form>
        </Box>
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
            src="pan.jpg" 
            alt="Illustration"
            style={{ maxWidth: "90%", height: "auto", borderRadius: "12px" }}
          />
        </Box>
      </Container>

      <OtpModal
        open={isOtpModalOpen}
        otpCode={otpCode}
        handleClose={() => setIsOtpModalOpen(false)}
        email={formValues.pan} 
        onSubmit={handleOtpSubmit}
      />
    </Box>
  );
};

export default PanRegistration;
