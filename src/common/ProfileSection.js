import React from 'react';
import { Typography, Grid, Paper, Box } from '@mui/material';

export default function ProfileSection() {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h5">Profile Information</Typography>
      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography>Name: John Doe</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Email: john.doe@example.com</Typography>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
