import HomeIcon from "@mui/icons-material/Home";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import StoreIcon from "@mui/icons-material/Store";
import LogoutIcon from "@mui/icons-material/Logout";
import { PRIMARY } from "../../../appBase/theme/palette";

const menuItems = {
  items: [
    {
      id: "dashboard",
      title: "Inicio",
      type: "group",
      children: [
        {
          id: "dashboard",
          title: "Principal",
          type: "item",
          url: "/",
          icon: <HomeIcon />,
          breadcrumbs: false,
        },
      ],
    },

    {
      id: "budget",
      title: "Acciones",
      type: "group",
      children: [
        {
          id: "budgets",
          title: "Presupuestos",
          type: "item",
          url: "/budgets/all",
          icon: <StoreIcon />,
          breadcrumbs: false,
        },
      ],
    },
  ],
};

export default menuItems;
