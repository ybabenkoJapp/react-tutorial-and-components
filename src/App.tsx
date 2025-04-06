import * as React from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import BasicButton from "./components/BasicButton";
import BasicRating from "./components/BasicRating";
import BasicBadge from "./components/BasicBadge";

import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Link,
  // useRouteMatch,
  useParams,
} from "react-router-dom";
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
import BasicFormControl from "./components/BasicFormControl";
import BasicInput from "./components/BasicInput";
import BasicImageAvatar from "./components/BasicImageAvatar";
import BasicIcons from "./components/BasicIcons";

const drawerWidth = 240;

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

export default function App() {
  const buttons = [
    { variant: "text", children: "Text", id: 1 },
    { variant: "contained", children: "Contained", id: 2 },
    { variant: "outlined", children: "Outlined", id: 3 },
  ];

  const ratings = [
    {
      name: "simple-controlled",
      controlledvalue: 2,
      value: 3.5,
      component: "legend",
      typography: "Controlled",
      id: 1,
    },
    {
      name: "simple-uncontrolled",
      component: "legend",
      typography: "Uncontrolled",
      defaultValue: 2,
      id: 2,
    },
    {
      name: "Disabled",
      component: "legend",
      typography: "Disabled",
      isDisabled: true,
      id: 3,
    },
  ];
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
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h6" noWrap component="div">
            Basic Inputs
          </Typography>
          <BasicInput />
          <Divider />
          <br />
          <br />
          <Typography variant="h6" noWrap component="div">
            Basic Radio Group
          </Typography>
          <BasicFormControl />
          <Divider />
          <br />
          <br />
          <Typography variant="h6" noWrap component="div">
            Basic buttons
          </Typography>
          <Divider />
          {buttons.map(({ variant, children, id }) => (
            <BasicButton variant={variant} children={children} key={id} />
          ))}
          <br />
          <br />
          <Divider />
          <Typography variant="h6" noWrap component="div">
            Basic Ratings
          </Typography>
          {ratings.map((props) => (
            <BasicRating {...props} key={props.id} />
          ))}
          <Divider />
          <br />
          <br />
          <Typography variant="h6" noWrap component="div">
            Basic Image avatar
          </Typography>
          <BasicImageAvatar />
          <Divider />
          <br />
          <br />
          <Typography variant="h6" noWrap component="div">
            Basic Badge
          </Typography>
          <BasicBadge />
          <Divider />
          <br />
          <br />
          <Typography variant="h6" noWrap component="div">
            Basic Icons
          </Typography>
          <BasicIcons />
        </Box>
      </ThemeProvider>
    </Box>
  );
}
