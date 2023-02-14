// @mui
import { styled } from "@mui/material/styles";
import { ListItemIcon, ListItemButton } from "@mui/material";
import { GREY } from "../../../appBase/theme/palette";

// ----------------------------------------------------------------------

export const StyledNavItem = styled((props) => <ListItemButton disableGutters {...props} />)(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: "relative",
  textTransform: "capitalize",
  color: GREY[10],
  borderRadius: theme.shape.borderRadius,
}));

export const StyledNavItemIcon = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: GREY[10],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
