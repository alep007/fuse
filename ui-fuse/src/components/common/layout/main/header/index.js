import PropTypes from "prop-types";

// material-ui
import { useTheme } from "@mui/material/styles";
import { Avatar, Box, ButtonBase } from "@mui/material";

// project imports
import LogoSection from "../logo";
import ProfileSection from "./profile";

// assets
import MenuIcon from "@mui/icons-material/Menu";
import { useRecoilState } from "recoil";
import menuAtom from "../../../../../recoil/folder/atom";

// ==============================|| MAIN NAVBAR / HEADER ||============================== //

const Header = () => {
  const [menu, setMenuDrawer] = useRecoilState(menuAtom);

  const onClickDrawer = () => {
    let updatedValue = !menu.isDrawerOpen;

    const newMenu = { ...menu, isDrawerOpen: updatedValue };
    setMenuDrawer(newMenu);
  };

  const theme = useTheme();

  return (
    <>
      {/* logo & toggler button */}
      <Box
        sx={{
          width: 228,
          display: "flex",
          [theme.breakpoints.down("md")]: {
            width: "auto",
          },
        }}
      >
        <Box component="span" sx={{ display: { xs: "none", md: "block" }, flexGrow: 1 }}>
          <LogoSection />
        </Box>
        <ButtonBase sx={{ borderRadius: "12px", overflow: "hidden" }}>
          <Avatar
            variant="rounded"
            sx={{
              ...theme.typography.commonAvatar,
              ...theme.typography.mediumAvatar,
              transition: "all .2s ease-in-out",
              background: theme.palette.background.default,
              color: theme.palette.primary.main,
              "&:hover": {
                background: theme.palette.primary.dark,
                color: theme.palette.primary.light,
              },
            }}
            onClick={onClickDrawer}
            color="inherit"
          >
            <MenuIcon stroke={1.5} size="1.3rem" />
          </Avatar>
        </ButtonBase>
      </Box>

      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ flexGrow: 1 }} />

      <ProfileSection />
    </>
  );
};

Header.propTypes = {
  handleLeftDrawerToggle: PropTypes.func,
};

export default Header;
