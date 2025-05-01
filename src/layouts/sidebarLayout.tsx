import * as React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Toolbar,
  Divider,
  CssBaseline,
  AppBar,
  Typography,
  ListItemButton,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { MyThemeProvider } from "../buildInHooks/ThemeContext";
import ThemedButton from "../components/ThemedButton";
import BasicUseEffectExample from "../buildInHooks/BasicUseEffectExample";
import { Outlet } from "react-router";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

export default function SidebarLayout() {
   const [value, setValue] = React.useState("My test value");

   function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
     setValue(e.target.value);
   }
  const drawerWidth = 240;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Divider />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {["Radio Group", "Buttons", "Raiting"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
      <ThemeProvider theme={theme}>
        <MyThemeProvider>
          <ThemedButton />
        </MyThemeProvider>
        <BasicUseEffectExample userId={1} />
      </ThemeProvider>
      <Outlet />
    </Box>
  );
}
