import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import PanToolIcon from "@mui/icons-material/PanTool"; 
import OtpModal from "../common/OtpModal";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const AadharVerificationPage = () => {
  const [formValues, setFormValues] = useState({
    aadharNumber: "",
  });
  const otpCode = 'P-1234'
  const [formErrors, setFormErrors] = useState({});
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const input = event.target.value.replace(/[^0-9]/g, "");
    let formattedInput = "";

    for (let i = 0; i < input.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedInput += "-";
      }
      formattedInput += input[i];
    }
    
    setFormValues({ ...formValues, aadharNumber: formattedInput }); 
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if(!formValues.aadharNumber){
        errors.aadharNumber = "Aadhar number is required";
    } else if(formValues.aadharNumber.length<14){
        errors.aadharNumber = "Please enter a vaild Aadhar Number";
    }else{
      setIsOtpModalOpen(true);
    }   
    setFormErrors(errors);

  };

  const handleOtpSubmit = (otpValue) =>{
    if (otpCode === otpValue) {
        toast.success("Aadhar verified successfully.");
        navigate('/address')
      } else {
        toast.error("OTP verification failed. Please try again.");
      }
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: 2,
          padding: 4,
          boxShadow: 3,
          width: { xs: "90%", sm: 600, md: 800 },
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Left Side: Image */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: { xs: 2, md: 0 },
          }}
        >
          <img
            src="adhar.jpg"
            alt="Aadhar Card Illustration"
            style={{ width: "100%", maxWidth: "300px", height: "auto" }}
          />
        </Box>

        {/* Right Side: Aadhar Input */}
        <Box sx={{ flex: 1, paddingLeft: { md: 2 } }}>
          <Typography variant="h5" gutterBottom>
            Aadhar Verification
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 2 }}>
            Please enter your 12-digit Aadhar number (e.g., 1234-5678-9012).
          </Typography>

          <TextField
            fullWidth
            label="Aadhar Number"
            name="aadharNumber"
            type="text"
            value={formValues.aadharNumber}
            onChange={handleInputChange}
            error={!!formErrors.aadharNumber}
            helperText={formErrors.aadharNumber}
            margin="normal"
            variant="outlined"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PanToolIcon />
                </InputAdornment>
              ),
              inputProps: {
                maxLength: 14,
              },
            }}
          />

          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{ paddingX: 5 }}
          >
            Verify
          </Button>
        </Box>
      </Box>

      <OtpModal
        open={isOtpModalOpen}
        otpCode={otpCode}
        handleClose={() => setIsOtpModalOpen(false)}
        email={'81******40'} // You can customize this if needed
        onSubmit={handleOtpSubmit}
      />
    </Box>
  );
};

export default AadharVerificationPage;
