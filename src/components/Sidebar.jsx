import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import {
  Dashboard,
  TableChart,
  CreditCard,
  Vrpano,
  SettingsInputComponent,
  Person,
  Login,
  PersonAdd,
  Help,
} from "@mui/icons-material";

const menuItems = [
  { text: "Dashboard", icon: <Dashboard />, color: "#E91E63" },
  { text: "Tables", icon: <TableChart /> },
  { text: "Billing", icon: <CreditCard /> },
  { text: "Virtual Reality", icon: <Vrpano /> },
  { text: "RTL", icon: <SettingsInputComponent /> },
];

const accountItems = [
  { text: "Profile", icon: <Person /> },
  { text: "Sign In", icon: <Login /> },
  { text: "Sign Up", icon: <PersonAdd /> },
];

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 250,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 250,
          boxSizing: "border-box",
          bgcolor: "#f8f9fa",
        },
      }}
    >
      <Box sx={{ p: 2, display: "flex", alignItems: "center", gap: 1 }}>
        <Box sx={{ bgcolor: "#cb0c9f", borderRadius: 1, p: 0.5 }}>
          <Typography variant="caption" sx={{ color: "white" }}>
            SU
          </Typography>
        </Box>
        <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
          Soft UI Dashboard
        </Typography>
      </Box>
      <List>
        {menuItems.map((item, index) => (
          <ListItem
            button
            key={item.text}
            sx={{
              bgcolor: index === 0 ? "#cb0c9f" : "transparent",
              color: index === 0 ? "white" : "inherit",
              borderRadius: 2,
              mx: 1,
              "&:hover": {
                bgcolor: index === 0 ? "#cb0c9f" : "rgba(0, 0, 0, 0.04)",
              },
            }}
          >
            <ListItemIcon sx={{ color: index === 0 ? "white" : "#A0AEC0" }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider sx={{ my: 2 }} />
      <Typography variant="overline" sx={{ px: 3, color: "#cb0c9f" }}>
        ACCOUNT PAGES
      </Typography>
      <List>
        {accountItems.map((item) => (
          <ListItem button key={item.text}>
            <ListItemIcon sx={{ color: "#A0AEC0" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 2, mt: "auto" }}>
        <Box sx={{ bgcolor: "#e9ecef", borderRadius: 2, p: 2, mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Help sx={{ mr: 1, color: "#A0AEC0" }} />
            <Typography variant="subtitle2">Need help?</Typography>
          </Box>
          <Typography variant="caption" sx={{ display: "block", mb: 1 }}>
            Please check our docs
          </Typography>
          <Button
            variant="contained"
            fullWidth
            sx={{
              bgcolor: "white",
              color: "black",
              "&:hover": {
                bgcolor: "#f8f9fa",
              },
            }}
          >
            DOCUMENTATION
          </Button>
        </Box>
        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "#cb0c9f",
            "&:hover": {
              bgcolor: "#dd0a92",
            },
          }}
        >
          UPGRADE TO PRO
        </Button>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
