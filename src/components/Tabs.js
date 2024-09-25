import React from 'react';
import { Tabs, Tab } from '@mui/material';

const ProfileTabs = ({ value, handleChange }) => {
  return (
    <Tabs value={value} onChange={handleChange} aria-label="profile tabs">
      <Tab label="Personal Details" />
      <Tab label="Security" />
      <Tab label="Support" />
    </Tabs>
  );
};

export default ProfileTabs;
