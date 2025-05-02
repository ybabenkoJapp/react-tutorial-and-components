import * as React from "react";
import {
  Drawer,
  List,
  ListItem,
  Box,
  Toolbar,
  Divider,
  CssBaseline,
  AppBar,
  Typography,
  ListItemButton,
} from "@mui/material";
import { Outlet, NavLink } from "react-router";

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
            {[
              { lable: "Radio Group", link: "/radio-group", id: 1 },
              { lable: "Buttons", link: "/buttons", id: 2 },
              { lable: "Raiting", link: "/raiting", id: 3 },
            ].flatMap(({ lable, link, id }) => (
              <ListItem key={id} disablePadding>
                <ListItemButton>
                  <NavLink to={link}>{lable}</NavLink>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Outlet />
    </Box>
  );
}
