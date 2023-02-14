//
import { Theme } from "@mui/material";
import Card from "./Card";

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: Theme) {
  return Object.assign(Card(theme));
}
