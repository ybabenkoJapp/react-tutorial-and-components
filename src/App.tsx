import * as React from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
import CardsItems from "./components/CardsItems";
import UseRefExample from "./components/UseRefExample";
import Counter from "./components/Counter";

const drawerWidth = 240;

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

export default function App() {
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
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, maxWidth: "100%", pt: 8 }}
        >
          {/* <CardsItems /> */}
          <UseRefExample />
          <Counter count={0} />
        </Box>
      </ThemeProvider>
    </Box>
  );
}
