import React from 'react';
import { Box, Typography, Modal } from '@mui/material';

const CustomModal = ({ open, onClose, title, content, actions }) => (
  <Modal open={open} onClose={onClose}>
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 450,
        bgcolor: 'background.paper',
        p: 4,
        borderRadius: '8px',
      }}
    >
      <Typography variant="h6" component="h2">
        {title}
      </Typography>
      {content}
      <Box mt={2} display={'flex'} justifyContent={'space-around'}>{actions}</Box>
    </Box>
  </Modal>
);

export default CustomModal;
