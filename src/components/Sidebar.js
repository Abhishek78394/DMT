import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import { AppBar, Typography } from "@mui/material";
import styles from "./Sidebar.module.css";
import { accountMenuItems, mainMenuItems } from "../services/constent";
import { useNavigate } from "react-router-dom";
import images from "../assets/image";
import SidebarMenu from "./SidebarMenu"

const drawerWidth = 260;

export default function Sidebar({ currentPath }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState("");

  React.useEffect(() => {
    const allMenuItems = [...mainMenuItems, ...accountMenuItems];
    const currentItem = allMenuItems.find((item) => item.route === currentPath);
    if (currentItem) {
      setActiveTab(currentItem.tab);
    }
  }, [currentPath]);

  const handleTabClick = ({ route, tabName }) => {
    setActiveTab(tabName);
    navigate(route);
  };

  return (
    <>
      <AppBar
        className={styles.head}
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: "transparent",
          color: "#000",
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {/* {activeTab} */}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            overflow: "hidden",
            className: styles.sidebarShadow,
            boxShadow: "1px 5px 13px rgba(0, 0, 0, 0.2)",
          },
        }}
        variant="permanent"
        anchor="left"
        classes={{ paper: styles.drawerPaper }}
      >
        <Toolbar className={styles.logoHeader}>
          <Typography
            className={styles.logo}
            variant="h6"
            noWrap={false}
            component="div"
          >
            Purn Tech
          </Typography>
        </Toolbar>
        <SidebarMenu
          items={mainMenuItems}
          activeTab={activeTab}
          handleTabClick={handleTabClick}
        />
        <Divider sx={{ borderBottom: "2px solid #ccc", margin: "10px 0" }} />
        <SidebarMenu
          items={accountMenuItems}
          activeTab={activeTab}
          handleTabClick={handleTabClick}
        />
      </Drawer>
      <img className={styles.backgroundImage} src={images.blob} alt="blob-2" />
    </>
  );
}
