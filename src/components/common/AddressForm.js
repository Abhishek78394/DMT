import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import './AddressForm.css';
import { toast } from 'react-toastify';
import BankVerification from './BankVerification';

const AddressForm = () => {
  const [currentAddress, setCurrentAddress] = useState({
    address1: '',
    address2: '',
    state: '',
    city: '',
    pincode: '',
    landmark: '',
  });

  const [communicationAddress, setCommunicationAddress] = useState({
    address1: '',
    address2: '',
    state: '',
    city: '',
    pincode: '',
    landmark: '',
  });

  const [isSameAsCurrent, setIsSameAsCurrent] = useState(false);
  const [isModel, setIsModel] = useState(false);

  const handleCurrentAddressChange = (e) => {
    const { name, value } = e.target;
    setCurrentAddress((prev) => ({ ...prev, [name]: value }));

    if (isSameAsCurrent) {
      setCommunicationAddress((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleCommunicationAddressChange = (e) => {
    const { name, value } = e.target;
    setCommunicationAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    setIsSameAsCurrent(e.target.checked);

    if (e.target.checked) {
      setCommunicationAddress(currentAddress);
    } else {
      setCommunicationAddress({
        address1: '',
        address2: '',
        state: '',
        city: '',
        pincode: '',
        landmark: '',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // toast.success('')
    setIsModel(true)
    console.log('Current Address:', currentAddress);
    console.log('Communication Address:', communicationAddress);
  };

  return (
    <Box sx={{
      width: '100vw',
      height: '100vh',
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Paper className="enhanced-form-paper">
        <Typography variant="h4" className="enhanced-form-title">
           Address Form
        </Typography>
        <div className="form-content">
          <form onSubmit={handleSubmit}>
            <Typography variant="h6" className="enhanced-section-title">
              Current Address
            </Typography>
            <Grid container spacing={2}>
              {Object.keys(currentAddress).map((key) => (
                <Grid item xs={12} sm={6} key={key}>
                  <TextField
                    fullWidth
                    label={key.charAt(0).toUpperCase() + key.slice(1)}
                    variant="outlined"
                    name={key}
                    value={currentAddress[key]}
                    onChange={handleCurrentAddressChange}
                    required
                    className="enhanced-input-field"
                  />
                </Grid>
              ))}
            </Grid>

            <FormControlLabel
              control={
                <Checkbox
                  checked={isSameAsCurrent}
                  onChange={handleCheckboxChange}
                  className="enhanced-checkbox"
                />
              }
              label="Same as current address"
            />

            <Typography variant="h6" className="enhanced-section-title">
              Communication Address
            </Typography>
            <Grid container spacing={2}>
              {Object.keys(communicationAddress).map((key) => (
                <Grid item xs={12} sm={6} key={key}>
                  <TextField
                    fullWidth
                    label={key.charAt(0).toUpperCase() + key.slice(1)}
                    variant="outlined"
                    name={key}
                    value={communicationAddress[key]}
                    onChange={handleCommunicationAddressChange}
                    required
                    disabled={isSameAsCurrent}
                    className="enhanced-input-field"
                  />
                </Grid>
              ))}
            </Grid>

            <Button
              variant="contained"
              color="primary"
              type="submit"
              className="enhanced-submit-btn"
            >
              Submit
            </Button>
          </form>
        </div>
      </Paper>
      { isModel &&  <BankVerification /> }
    </Box>
  );
};

export default AddressForm;
