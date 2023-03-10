import PropTypes from "prop-types";
import { forwardRef, useEffect } from "react";
import { Link } from "react-router-dom";

// material-ui
import { useTheme } from "@mui/material/styles";
import { Avatar, Chip, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { useRecoilState } from "recoil";
import menuAtom from "../../../../../../recoil/folder/atom";

// ==============================|| SIDEBAR MENU LIST ITEMS ||============================== //

const NavItem = ({ item, level }) => {
  const theme = useTheme();

  const [menu, setMenuItem] = useRecoilState(menuAtom);

  const itemHandler = (id) => {
    const newMenu = { ...menu, itemIsOpen: [id] };
    setMenuItem(newMenu);
  };

  let itemTarget = "_self";
  if (item.target) {
    itemTarget = "_blank";
  }

  let listItemProps = {
    component: forwardRef((props, ref) => <Link ref={ref} {...props} to={item.url} target={itemTarget} />),
  };
  if (item?.external) {
    listItemProps = { component: "a", href: item.url, target: itemTarget };
  }

  // active menu item on page load
  useEffect(() => {
    const currentIndex = document.location.pathname
      .toString()
      .split("/")
      .findIndex((id) => id === item.id);
    if (currentIndex > -1) {
      const newMenu = { ...menu, itemIsOpen: [item.id] };
      setMenuItem(newMenu);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ListItemButton
      {...listItemProps}
      disabled={item.disabled}
      sx={{
        borderRadius: `12px`,
        mb: 0.5,
        alignItems: "flex-start",
        backgroundColor: level > 1 ? "transparent !important" : "inherit",
        py: level > 1 ? 1 : 1.25,
        pl: `${level * 24}px`,
      }}
      onClick={() => itemHandler(item.id)}
      selected={menu.itemIsOpen.findIndex((id) => id === item.id) > -1}
    >
      <ListItemIcon sx={{ my: "auto", minWidth: !item?.icon ? 18 : 36 }}>{item.icon}</ListItemIcon>
      <ListItemText
        primary={
          <Typography
            // variant={customization.isOpen.findIndex((id) => id === item.id) > -1 ? "h5" : "body1"}
            variant="h5"
            color="inherit"
          >
            {item.title}
          </Typography>
        }
        secondary={
          item.caption && (
            <Typography variant="caption" sx={{ ...theme.typography.subMenuCaption }} display="block" gutterBottom>
              {item.caption}
            </Typography>
          )
        }
      />
      {item.chip && (
        <Chip
          color={item.chip.color}
          variant={item.chip.variant}
          size={item.chip.size}
          label={item.chip.label}
          avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
        />
      )}
    </ListItemButton>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number,
};

export default NavItem;
