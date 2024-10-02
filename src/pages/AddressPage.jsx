import React, { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    TextField,
    Checkbox,
    FormControlLabel,
    Grid,
} from '@mui/material';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddressPage = () => {
    const [currentAddress, setCurrentAddress] = useState({
        street: '',
        city: '',
        state: '',
        zipCode: '',
        landmark: '',
    });
    const [communicationAddress, setCommunicationAddress] = useState({
        street: '',
        city: '',
        state: '',
        zipCode: '',
        landmark: '',
    });
    const [isSameAddress, setIsSameAddress] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()

    const handleCheckboxChange = () => {
        setIsSameAddress(!isSameAddress);
        if (!isSameAddress) {
            setCommunicationAddress(currentAddress);
        } else {
            setCommunicationAddress({
                street: '',
                city: '',
                state: '',
                zipCode: '',
                landmark: '',
            });
        }
    };

    const handleCurrentAddressChange = (event) => {
        const { name, value } = event.target;
        setCurrentAddress({ ...currentAddress, [name]: value });
        if (isSameAddress) {
            setCommunicationAddress({ ...currentAddress, [name]: value });
        }
    };

    const handleCommunicationAddressChange = (event) => {
        const { name, value } = event.target;
        setCommunicationAddress({ ...communicationAddress, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};

        // Validate Current Address
        for (const field in currentAddress) {
            if (!currentAddress[field]) {
                newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
            }
        }

        // Validate Communication Address only if it's not the same as the current address
        if (!isSameAddress) {
            for (const field in communicationAddress) {
                if (!communicationAddress[field]) {
                    newErrors[`communication_${field}`] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
                }
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            console.log('Current Address:', currentAddress);
            console.log('Communication Address:', communicationAddress);
            toast.success('Form submitted successfully!');
            navigate('/bank');
        }
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
            <Box
                sx={{
                    backgroundColor: '#fff',
                    borderRadius: 2,
                    padding: 4,
                    boxShadow: 3,
                    width: { xs: '90%', sm: 600, md: 800 },
                }}
            >
                <Typography variant="h5" gutterBottom>
                    Address Verification
                </Typography>

                {/* Current Address Fields */}
                <Typography variant="h6" gutterBottom>
                    Current Address
                </Typography>
                <TextField
                    fullWidth
                    label="Street"
                    name="street"
                    value={currentAddress.street}
                    onChange={handleCurrentAddressChange}
                    margin="normal"
                    variant="outlined"
                    error={!!errors.street}
                    helperText={errors.street}
                />
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="City"
                            name="city"
                            value={currentAddress.city}
                            onChange={handleCurrentAddressChange}
                            margin="normal"
                            variant="outlined"
                            error={!!errors.city}
                            helperText={errors.city}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="State"
                            name="state"
                            value={currentAddress.state}
                            onChange={handleCurrentAddressChange}
                            margin="normal"
                            variant="outlined"
                            error={!!errors.state}
                            helperText={errors.state}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="Zip Code"
                            name="zipCode"
                            value={currentAddress.zipCode}
                            onChange={handleCurrentAddressChange}
                            margin="normal"
                            variant="outlined"
                            error={!!errors.zipCode}
                            helperText={errors.zipCode}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="Landmark"
                            name="landmark"
                            value={currentAddress.landmark}
                            onChange={handleCurrentAddressChange}
                            margin="normal"
                            variant="outlined"
                            error={!!errors.landmark}
                            helperText={errors.landmark}
                        />
                    </Grid>
                </Grid>

                {/* Communication Address Checkbox */}
                <FormControlLabel
                    control={<Checkbox checked={isSameAddress} onChange={handleCheckboxChange} />}
                    label="Same as Current Address"
                />

                {/* Communication Address Fields */}
                <Typography variant="h6" gutterBottom>
                    Communication Address
                </Typography>
                <TextField
                    fullWidth
                    label="Street"
                    name="street"
                    value={isSameAddress ? currentAddress.street : communicationAddress.street}
                    onChange={handleCommunicationAddressChange}
                    margin="normal"
                    variant="outlined"
                    error={!!errors.communication_street && !isSameAddress} // Updated error handling
                    helperText={isSameAddress ? '' : errors.communication_street} // Updated helper text
                    disabled={isSameAddress} // Disable field if addresses are the same
                />
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="City"
                            name="city"
                            value={isSameAddress ? currentAddress.city : communicationAddress.city}
                            onChange={handleCommunicationAddressChange}
                            margin="normal"
                            variant="outlined"
                            error={!!errors.communication_city && !isSameAddress} // Updated error handling
                            helperText={isSameAddress ? '' : errors.communication_city} // Updated helper text
                            disabled={isSameAddress} // Disable field if addresses are the same
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="State"
                            name="state"
                            value={isSameAddress ? currentAddress.state : communicationAddress.state}
                            onChange={handleCommunicationAddressChange}
                            margin="normal"
                            variant="outlined"
                            error={!!errors.communication_state && !isSameAddress} // Updated error handling
                            helperText={isSameAddress ? '' : errors.communication_state} // Updated helper text
                            disabled={isSameAddress} // Disable field if addresses are the same
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="Zip Code"
                            name="zipCode"
                            value={isSameAddress ? currentAddress.zipCode : communicationAddress.zipCode}
                            onChange={handleCommunicationAddressChange}
                            margin="normal"
                            variant="outlined"
                            error={!!errors.communication_zipCode && !isSameAddress} // Updated error handling
                            helperText={isSameAddress ? '' : errors.communication_zipCode} // Updated helper text
                            disabled={isSameAddress} // Disable field if addresses are the same
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="Landmark"
                            name="landmark"
                            value={isSameAddress ? currentAddress.landmark : communicationAddress.landmark}
                            onChange={handleCommunicationAddressChange}
                            margin="normal"
                            variant="outlined"
                            error={!!errors.communication_landmark && !isSameAddress} // Updated error handling
                            helperText={isSameAddress ? '' : errors.communication_landmark} // Updated helper text
                            disabled={isSameAddress} // Disable field if addresses are the same
                        />
                    </Grid>
                </Grid>

                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{ marginTop: 3, paddingX: 5 }}
                >
                    Submit
                </Button>
            </Box>
        </Box>
    );
};

export default AddressPage;
