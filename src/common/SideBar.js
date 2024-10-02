import React from 'react';
import { Grid, Box, Typography, Button, List, ListItem, ListItemText, ListItemIcon, Card, CardContent } from '@mui/material';
import { Home, Payment, AccountBalance, AttachMoney, TrendingUp } from '@mui/icons-material';
import { useTheme, useMediaQuery } from '@mui/material';

const Sidebar = () => {
  return (
    <Box sx={{ height: '100vh', padding: 2, borderRight: '1px solid #e0e0e0' }}>
      <Typography variant="h6">universe</Typography>
      <List>
        {['Home', 'Transactions', 'Payments', 'Accounts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 0 && <Home />}
              {index === 1 && <AccountBalance />}
              {index === 2 && <Payment />}
              {index === 3 && <AttachMoney />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
export default Sidebar