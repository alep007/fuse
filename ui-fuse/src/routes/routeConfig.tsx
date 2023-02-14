import HomeIcon from "@mui/icons-material/Home";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import StoreIcon from "@mui/icons-material/Store";
import LogoutIcon from "@mui/icons-material/Logout";
// ----------------------------------------------------------------------

const navConfig = [
  {
    title: "Inicio",
    path: "/",
    icon: <HomeIcon />,
  },

  {
    title: "Presupuestos",
    path: "/budgets",
    icon: <StoreIcon />,
  },
  {
    title: "Perfil",
    path: "/user",
    icon: <SupervisedUserCircleIcon />,
  },
  {
    title: "Salir",
    path: "/logout",
    icon: <LogoutIcon />,
  },
];

export default navConfig;
