import React from 'react';
import { Grid, Box, Typography, Button, List, ListItem, ListItemText, Card, CardContent } from '@mui/material';
import { TrendingUp } from '@mui/icons-material';
import { useTheme, useMediaQuery } from '@mui/material';
import Sidebar from '../common/SideBar';

const Dashboard = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
    return (
      <Grid container>
        {/* Sidebar */}
        {!isMobile && (
          <Grid item xs={2}>
            <Sidebar />
          </Grid>
        )}
        
        {/* Main Content */}
        <Grid item xs={12} sm={10}>
          <Box sx={{ padding: 4 }}>
            <Grid container spacing={4}>
              {/* Header */}
              <Grid item xs={12} md={8}>
                <Typography variant="h4">Hey Jordan 👋</Typography>
                <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
                  Here are your recent transactions:
                </Typography>
                <List>
                  {[
                    { name: 'Mailchimp', amount: '-$350' },
                    { name: 'Atlassian', amount: '-$1469' },
                    { name: 'DigitalOcean', amount: '-$150' },
                  ].map((item, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={item.name} secondary={`Amount: ${item.amount}`} />
                    </ListItem>
                  ))}
                </List>
              </Grid>
  
              {/* Balance Section */}
              <Grid item xs={12} md={4}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">Balance</Typography>
                    <Typography variant="h4">$1,636,500</Typography>
                    <Button variant="contained" color="primary" fullWidth>
                      Send Money
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
  
              {/* Upcoming Bills */}
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">Upcoming Bills</Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <Box sx={{ padding: 2, backgroundColor: '#f5f5f5' }}>
                          <Typography variant="h5">$105</Typography>
                          <Typography variant="body2">Due 12-31 Apr</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <Box sx={{ padding: 2, backgroundColor: '#f5f5f5' }}>
                          <Typography variant="h5">$730</Typography>
                          <Typography variant="body2">Due 01-15 May</Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <Box sx={{ padding: 2, backgroundColor: '#f5f5f5' }}>
                          <Typography variant="h5">$149</Typography>
                          <Typography variant="body2">Due 16-31 May</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
  
              {/* Wallet Section */}
              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">Your Wallet</Typography>
                    <Typography variant="h4">$109,795</Typography>
                    <TrendingUp fontSize="large" />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    );
  };
  
export default Dashboard