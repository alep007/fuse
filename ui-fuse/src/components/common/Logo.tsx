import { forwardRef } from "react";

import { Box } from "@mui/material";

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }: any, ref) => {
  const logo = <Box component="img" src="/assets/logo.svg" sx={{ width: 40, height: 40, cursor: "pointer", ...sx }} />;

  return <>{logo}</>;
});

export default Logo;
