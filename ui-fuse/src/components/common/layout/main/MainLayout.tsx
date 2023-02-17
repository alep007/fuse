import { useState } from "react";
import { Outlet } from "react-router-dom";
// @mui
import { styled, useTheme } from "@mui/material/styles";
//
import { AppBar, Box, Toolbar, useMediaQuery } from "@mui/material";
import Header from "./header";
import Sidebar from "../sidebar";

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 260;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }: any) => ({
  //@ts-ignore
  ...theme.typography.mainContent,
  ...(!open && {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up("md")]: {
      marginLeft: -(DRAWER_WIDTH - 20),
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "20px",
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      padding: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10px",
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      padding: "16px",
      marginRight: "10px",
    },
  }),
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    [theme.breakpoints.down("md")]: {
      marginLeft: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10px",
    },
  }),
}));

// ----------------------------------------------------------------------

export default function MainLayout() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ display: "flex" }}>
      {/* header */}
      <AppBar
        enableColorOnDark
        position="fixed"
        color={"inherit"}
        elevation={0}
        sx={{
          bgcolor: theme.palette.common.white,
          transition: open ? theme.transitions.create("width") : "none",
        }}
      >
        <Toolbar>
          {/* <Header handleLeftDrawerToggle={handleLeftDrawerToggle} /> */}
          <Header />
        </Toolbar>
      </AppBar>

      {/* drawer */}
      <Sidebar drawerOpen />
      {/* {!matchDownMd ? leftDrawerOpened : !leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} */}
      <Sidebar />

      {/* main content */}
      {/* @ts-ignore */}
      <Main theme={theme} open={open}>
        <Outlet />
      </Main>
    </Box>
  );
}
