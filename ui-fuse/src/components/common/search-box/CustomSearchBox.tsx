import React, { useState } from "react";
import { useSearchBox, UseSearchBoxProps } from "react-instantsearch-hooks-web";
import { styled, alpha } from "@mui/material/styles";
import { Toolbar, Tooltip, IconButton, Typography, OutlinedInput, InputAdornment, Button, Icon } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { SECONDARY, WHITE } from "../../../appBase/theme/palette";

const CustomSearchBox = (props: UseSearchBoxProps) => {
  const { query, refine } = useSearchBox(props);

  //   const [text];

  return (
    <StyledRoot>
      <StyledSearch
        // value={filterName}
        // onChange={onFilterName}
        placeholder="Busqueda de actividades..."
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={() => {
                alert("hi");
              }}
            >
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        }
      />
      <Button variant="contained" color="primary" size="large">
        Filtros
      </Button>
    </StyledRoot>
  );
};

export default CustomSearchBox;

const StyledRoot = styled(Toolbar)(({ theme }) => ({
  height: 96,
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1, 0, 3),
}));

const StyledSearch = styled(OutlinedInput)(({ theme }) => ({
  width: "90%",
  transition: theme.transitions.create(["box-shadow", "width"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  "&.Mui-focused": {
    width: "90%",
    //@ts-ignore
    boxShadow: theme.customShadows.z8,
  },
  "& fieldset": {
    borderWidth: `1px !important`,
    borderColor: `${alpha(theme.palette.grey[500], 0.32)} !important`,
  },
}));
