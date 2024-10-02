import React from 'react';
import { Typography, Paper, Box, Switch, FormControlLabel } from '@mui/material';

export default function SettingsSection() {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h5">Settings</Typography>
      <Box sx={{ mt: 2 }}>
        <FormControlLabel
          control={<Switch checked={true} />}
          label="Enable Notifications"
        />
        <FormControlLabel
          control={<Switch checked={false} />}
          label="Enable Dark Mode"
        />
      </Box>
    </Paper>
  );
}
