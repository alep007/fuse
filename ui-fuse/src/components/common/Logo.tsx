import { forwardRef } from "react";
import { Link as RouterLink } from "react-router-dom";
// @mui
import { Box, Link } from "@mui/material";

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }: any, ref) => {
  const logo = <Box component="img" src="/assets/logo.svg" sx={{ width: 40, height: 40, cursor: "pointer", ...sx }} />;

  if (disabledLink) {
    return <>{logo}</>;
  }

  return (
    <Link to="/" component={RouterLink} sx={{ display: "contents" }}>
      {logo}
    </Link>
  );
});

export default Logo;
