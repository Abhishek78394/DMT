import React, { useState } from 'react';
import { Box, Typography, Avatar, Button, TextField, Grid } from '@mui/material';
import ProfileTabs from './Tabs';

const Profile = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Box sx={{ padding: '30px', flexGrow: 1 }}>
      <Typography variant="h5" sx={{ marginBottom: '20px' }}>My Account</Typography>
      <ProfileTabs value={tabIndex} handleChange={handleTabChange} />

      {tabIndex === 0 && (
        <Box sx={{ marginTop: '20px' }}>
          <Typography variant="h6" gutterBottom>Profile</Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
            <Avatar
              sx={{ width: 100, height: 100, marginRight: '20px' }}
              alt="Profile Picture"
              src="https://randomuser.me/api/portraits/women/50.jpg" // Example image
            />
            <Button variant="outlined" sx={{ marginRight: '10px' }}>Update</Button>
            <Button variant="outlined" color="error">Delete</Button>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Name"
                defaultValue="Amelia Johnson"
                InputProps={{ readOnly: true }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Mobile Number"
                defaultValue="+1123456789"
                InputProps={{ readOnly: true }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                defaultValue="123 Main St"
                InputProps={{ readOnly: true }}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Box>
      )}

      {tabIndex === 1 && (
        <Box sx={{ marginTop: '20px' }}>
          <Typography variant="h6">Security Settings</Typography>
          {/* Add Security Tab content */}
        </Box>
      )}

      {tabIndex === 2 && (
        <Box sx={{ marginTop: '20px' }}>
          <Typography variant="h6">Support</Typography>
          {/* Add Support Tab content */}
        </Box>
      )}
    </Box>
  );
};

export default Profile;
