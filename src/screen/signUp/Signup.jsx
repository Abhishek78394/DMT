import React from "react";
import {
    Container,
    Box,
    Typography,
    TextField,
    Button,
    Grid,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function SignupPage() {
    const { navigate } = useNavigate();

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
                            padding: 4,
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
                                    margin: "0 auto",
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
                            Sign Up
                        </Typography>
                        <Box component="form" noValidate autoComplete="off">
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Name"
                                        variant="outlined"
                                        type="text"
                                        required
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        variant="outlined"
                                        type="email"
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

export default SignupPage;
