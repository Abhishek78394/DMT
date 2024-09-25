import React, { useState } from 'react';
import { CircularProgress, Button, Box, Typography } from '@mui/material';

const Loader = () => {
    return (
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
          <Box display="flex" flexDirection="column" alignItems="center">
            <CircularProgress />
            <Typography variant="h6" mt={2}>
              Loading, please wait...
            </Typography>
          </Box>
      </Box>
    );
  }
  

export default Loader