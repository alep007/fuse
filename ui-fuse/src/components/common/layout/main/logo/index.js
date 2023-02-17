import { Link } from "react-router-dom";
// material-ui
import { ButtonBase, Grid, Stack, Typography, useTheme } from "@mui/material";

// project imports
import Logo from "../../../Logo";

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  const theme = useTheme();

  return (
    <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
      <ButtonBase
        disableRipple
        //   onClick={}
        component={Link}
        to="/"
      >
        <Logo />
      </ButtonBase>
      <Typography variant="h2" gutterBottom color={theme.palette.primary.light}>
        Asuka
      </Typography>
    </Stack>
  );
};

export default LogoSection;
