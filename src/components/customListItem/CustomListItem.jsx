import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import styles from './CustomListItem.module.css'

const CustomListItem = ({ text, icon, activeIcon, isActive, onClick }) => {
  return (
    <ListItem
      className={`${styles.listItem} ${isActive ? styles.activeListItem : ""}`}
      disablePadding
      onClick={onClick}
    >
      <ListItemButton>
        <ListItemIcon>{isActive ? activeIcon : icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

export default CustomListItem;
