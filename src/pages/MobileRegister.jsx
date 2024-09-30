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
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { maskEmailOrMobile } from "../utils/helpers";
import OtpModal from "../common/OtpModal";
import MobileFriendly from '@mui/icons-material/MobileFriendly';

const MobileVerification = () => {
  const [formValues, setFormValues] = useState({
    mobile: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const otpCode = 'P-1234';  
  const navigate = useNavigate();
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validate = () => {
    const errors = {};
    const mobilePattern = /^[0-9]{10}$/;

    if (!formValues.mobile) {
      errors.mobile = "Mobile number is required";
    } else if (!mobilePattern.test(formValues.mobile)) {
      errors.mobile = "Please enter a valid 10-digit mobile number";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0; 
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const isValid = validate();
    if (isValid) {
      setIsOtpModalOpen(true); 
    }
  };

  const handleOtpSubmit = (otpValue) => {
    if (otpCode === otpValue) {
      toast.success("Mobile Number verified successfully.");
      return navigate('/pan-verification'); 
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
            src="signup-image.jpg"
            alt="Illustration"
            style={{ maxWidth: "90%", height: "auto", borderRadius: "12px" }}
          />
        </Box>

        <Box sx={{ width: { xs: "100%", md: "45%" } }}>
          <Typography variant="h4" sx={{ fontWeight: "semibold", marginBottom: 3 }}>
            Register Mobile
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Mobile"
                  name="mobile"
                  type="text"
                  value={formValues.mobile}
                  onChange={handleChange}
                  error={!!formErrors.mobile}
                  helperText={formErrors.mobile}
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MobileFriendly />
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
      </Container>

      <OtpModal
        open={isOtpModalOpen}
        otpCode={otpCode}
        handleClose={() => setIsOtpModalOpen(false)}
        email={maskEmailOrMobile(formValues.mobile)}
        onSubmit={handleOtpSubmit}
      />
    </Box>
  );
};

export default MobileVerification;
