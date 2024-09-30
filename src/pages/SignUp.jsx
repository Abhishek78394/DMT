import React, { useState } from "react";
import {
  Box,
  Container,
  Button,
  FormControlLabel,
  Typography,
  Checkbox,
} from "@mui/material";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

import { maskEmailOrMobile } from "../utils/helpers";
import RegisterForm from "../components/RegisterForm";
import { useRegisterForm } from "../hooks/useRegisterForm";
import OtpModal from "../common/OtpModal";


const SignUp = () => {
  const {
    formValues,
    formErrors,
    handleChange,
    handleCheckboxChange,
    validate,
  } = useRegisterForm();
  const otpCode = 'P-1234'
  const navigate = useNavigate();
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      setIsOtpModalOpen(true);
    }
  };

  const handleOtpSubmit = (otpValue) => {
    if(otpCode===otpValue) {
        toast.success("OTP verified successfully.")
        return navigate('/mobile-verification')
    }else {
        toast.error("OTP verification failed. Please try again.")
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
        <Box sx={{ width: { xs: "100%", md: "45%" } }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 3 }}>
            Sign up
          </Typography>

          <RegisterForm
            formValues={formValues}
            handleChange={handleChange}
            formErrors={formErrors}
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={formValues?.agreeTerms}
                onChange={handleCheckboxChange}
                color="primary"
              />
            }
            label={
              <Typography variant="body2">
                I agree to all statements in{" "}
                <Link to="#" underline="always">
                  Terms of service
                </Link>
              </Typography>
            }
            sx={{ marginTop: 2 }}
          />
          {formErrors.agreeTerms && (
            <Typography variant="body2" color="error">
              {formErrors.agreeTerms}
            </Typography>
          )}

          <Button
            onClick={handleSubmit}
            fullWidth
            variant="contained"
            color="primary"
            sx={{ marginTop: 3, padding: 1.5 }}
          >
            Sign Up
          </Button>
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
            src="signup-image.jpg"
            alt="Illustration"
            style={{ maxWidth: "90%", height: "auto", borderRadius: "12px" }}
          />
          <Typography align="center" variant="body2" sx={{ marginTop: 3 }}>
            <Link to="/sign-in" underline="hover">
              I am already a member
            </Link>
          </Typography>
        </Box>
      </Container>

      <OtpModal
        open={isOtpModalOpen}
        otpCode={otpCode}
        handleClose={() => setIsOtpModalOpen(false)}
        email={maskEmailOrMobile(formValues.email)}
        onSubmit={handleOtpSubmit}
      />
      {/* // {isMobileModelShow && <MobileRegister />} */}
    </Box>
  );
};

export default SignUp;
