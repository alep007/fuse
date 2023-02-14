import PropTypes from "prop-types";
import { NavLink as RouterLink } from "react-router-dom";
// @mui
import { Box, List, ListItemText } from "@mui/material";
//
import { StyledNavItem, StyledNavItemIcon } from "./styles";
import { GREY, SECONDARY } from "../../../appBase/theme/palette";

// ----------------------------------------------------------------------

NavSection.propTypes = {
  data: PropTypes.array,
};

export default function NavSection({ data = [], ...other }: any) {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item: any) => (
          <NavItem key={item.title} item={item} />
        ))}
      </List>
    </Box>
  );
}

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
};

function NavItem({ item }: any) {
  const { title, path, icon, info } = item;

  return (
    //@ts-ignore
    <StyledNavItem
      component={RouterLink}
      to={path}
      sx={{
        "&.active": {
          color: GREY[10],
          bgcolor: SECONDARY.main,
          fontWeight: "fontWeightBold",
        },
      }}
    >
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

      <ListItemText disableTypography primary={title} />

      {info && info}
    </StyledNavItem>
  );
}
