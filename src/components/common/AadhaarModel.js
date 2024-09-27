import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AadhaarModel.css"; 

const validateAadhaar = (aadhaar) => /^\d{12}$/.test(aadhaar);

const AadhaarModel = () => {
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [isValid, setIsValid] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setAadhaarNumber(value);
    setIsValid(validateAadhaar(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      toast.success("Aadhaar number validated successfully!");
    } else {
      toast.error("Invalid Aadhaar number! It should be 12 digits long.");
    }
  };

  return (
    <Box className="aadhaar-container">
      {/* Background effect */}
      <div className="background-cube"></div>
      <div className="background-circle"></div>

      <Paper className="aadhaar-form-container">
        <Typography variant="h4" className="aadhaar-title">
          Aadhaar Verification
        </Typography>

        <Box component="form" onSubmit={handleSubmit} className="aadhaar-form">
          <TextField
            label="PAN Number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={aadhaarNumber}
            onChange={handleChange}
            error={Boolean(errorMessage)} // Set error state based on message
            helperText={errorMessage && errorMessage} // Show error message only if exists
            InputProps={{
              startAdornment: (
                <VpnKeyIcon sx={{ color: "#00d4ff", marginRight: "10px" }} />
              ),
            }}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.25)",
              borderRadius: "15px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              "& .MuiOutlinedInput-root": {
                borderRadius: "15px",
                color: "#fff",
              },
              "& .MuiInputLabel-root": {
                color: "#fff",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#00d4ff",
              },
            }}
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            className="aadhaar-submit-btn"
          >
            Verify Aadhaar
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AadhaarModel;
