import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// @mui
import { Box, Drawer } from "@mui/material";

// components
import NavSection from "../navbar/NavSection";
//
import routeConfig from "../../../routes/routeConfig";
import Logo from "../Logo";
import { PRIMARY } from "../../../appBase/theme/palette";

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

// ----------------------------------------------------------------------

export default function Nav({ openNav, onCloseNav }: any) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <>
      <Box sx={{ px: 2.5, py: 3, display: "inline-flex" }}>
        <Logo />
      </Box>

      <NavSection data={routeConfig} />

      <Box sx={{ flexGrow: 1 }} />
    </>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      <Drawer
        open
        variant="permanent"
        PaperProps={{
          sx: {
            width: NAV_WIDTH,
            bgcolor: PRIMARY.darker,
            borderRightStyle: "dashed",
          },
        }}
      >
        {renderContent}
      </Drawer>
    </Box>
  );
}
