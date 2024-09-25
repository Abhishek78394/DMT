import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";

function LoginPage() {
  const { navigate } = useNavigate();
  const [loading, setLoading] = useState(false)

  if(loading) return <Loader />
  return (
    <Container
      maxWidth="md"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 4,
          backgroundColor: "white",
          width: "100%",
        }}
      >
        <Grid container>
          {/* Left Section */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#f5f5f5",
              borderTopLeftRadius: "16px",
              borderBottomLeftRadius: "16px",
              // padding: 4,
            }}
          >
            <Box>
              <img
                src="PurnTechLogo.png"
                alt="Logo"
                style={{
                  width: "180px",
                  height: "80px",
                  display: "block",
                  margin: "2rem auto",
                }}
              />
              <Typography variant="h5" align="center" gutterBottom>
                Create a Your Account
              </Typography>
              <Typography variant="body1" align="center">
                Access all Fintech services with one account.
              </Typography>
            </Box>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={6} sx={{ p: 4 }}>
            <Typography variant="h6" gutterBottom>
              Sign In
            </Typography>
            <Box component="form" noValidate autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email / Id / Mobile"
                    variant="outlined"
                    type="email"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Password"
                    variant="outlined"
                    type="password"
                    required
                  />
                </Grid>
              </Grid>

              {/* Next Button */}
              <Box mt={3} display="flex" justifyContent="flex-end">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  component={Link} to="/login-otp"
                >
                  Next
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default LoginPage;
