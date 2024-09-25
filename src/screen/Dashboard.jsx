import React from "react";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";
import { Box } from "@mui/material";

function Dashboard() {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Profile />
    </Box>
  );
}

export default Dashboard;
