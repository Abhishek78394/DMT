import React from 'react';
import { Box, Card, CardContent, Typography, Avatar, Button, Grid, IconButton } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MessageIcon from '@mui/icons-material/Message';
import { styled } from '@mui/material/styles';

const ProfileCard = () => {
  const ProfileAvatar = styled(Avatar)({
    width: 96,
    height: 96,
    margin: '0 auto',
    marginTop: '-48px',
    border: `4px solid white`,
  });

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(45deg, #ff416c 30%, #ff4b2b 90%)',
        padding: 2,
      }}
    >
      <Card
        sx={{
          width: {
            xs: '100%', // Full width on mobile devices
            sm: '80%',  // 80% width on small devices
            md: '60%',  // 60% width on medium devices (tablet)
            lg: '40%',  // 40% width on large devices (laptop and above)
          },
          textAlign: 'center',
          position: 'relative',
          borderRadius: 3,
          boxShadow: 3,
          overflow: 'visible',
          paddingBottom: '20px',
        }}
      >
        <ProfileAvatar
          alt="Samantha Jones"
          src="https://i.pravatar.cc/300"
        />
        <CardContent>
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
            Samantha Jones
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            New York, United States
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Web Producer - Web Specialist
            <br />
            Columbia University - New York
          </Typography>

          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={4}>
              <Typography variant="h6">65</Typography>
              <Typography variant="caption" color="text.secondary">
                Friends
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6">43</Typography>
              <Typography variant="caption" color="text.secondary">
                Photos
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6">21</Typography>
              <Typography variant="caption" color="text.secondary">
                Comments
              </Typography>
            </Grid>
          </Grid>

          <Button
            variant="contained"
            sx={{
              mt: 3,
              background: 'linear-gradient(45deg, #ff416c 30%, #ff4b2b 90%)',
              color: 'white',
              padding: '10px 20px',
            }}
          >
            Show more
          </Button>
        </CardContent>

        <Box
          sx={{
            position: 'absolute',
            top: 16,
            left: 16,
          }}
        >
          <IconButton>
            <PersonAddIcon color="primary" />
          </IconButton>
        </Box>

        <Box
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
          }}
        >
          <IconButton>
            <MessageIcon color="primary" />
          </IconButton>
        </Box>
      </Card>
    </Box>
  );
};

export default ProfileCard;
