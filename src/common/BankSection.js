import React from 'react';
import { Typography, Grid, Paper, Box } from '@mui/material';

export default function BankSection() {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h5">Linked Bank Accounts</Typography>
      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography>Bank Name: ABC Bank</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Account Number: 1234567890</Typography>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
