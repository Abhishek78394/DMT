import React from "react";
import CustomListItem from './customListItem/CustomListItem'
import { List } from "@mui/material";

const SidebarMenu = ({ items, activeTab, handleTabClick }) => {
  return (
    <List>
      {items.map((item, index) => (
        <CustomListItem
          key={index}
          text={item.text}
          icon={item.icon}
          activeIcon={item.activeIcon}
          isActive={activeTab === item.tab}
          onClick={() => handleTabClick({tabName:item.tab,route:item.route})}
        />
      ))}
    </List>
  );
};

export default SidebarMenu;
