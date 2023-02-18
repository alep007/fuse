import styled from "@emotion/styled";
import {
  Box,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { SECONDARY } from "../../appBase/theme/palette";
import { fCurrency } from "../../utils/formatNumber";
import { useRecoilValue } from "recoil";
import { compositionsQueryList } from "../../recoil/composition";

const ActivityTable = () => {
  const { data } = useRecoilValue(compositionsQueryList);

  if (data.length === 0) return null;

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <StyledTableCell />
              <StyledTableCell>Nombre</StyledTableCell>
              <StyledTableCell align="right">Categoria</StyledTableCell>
              <StyledTableCell align="right">Precio</StyledTableCell>
              <StyledTableCell align="right">U/medida</StyledTableCell>
              <StyledTableCell align="center">Accion</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((activity: any) => (
              <Row key={activity.id} row={activity} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Suspense>
  );
};

const Row = (props: { row: any }) => {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.category}</TableCell>
        <TableCell align="right">{row.price}</TableCell>
        <TableCell align="right">{row.unit_measure}</TableCell>
        <TableCell align="center">
          <IconButton>
            <NoteAddIcon sx={{ color: SECONDARY.main }} />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Items
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Cantidad</TableCell>
                    <TableCell>U/medida</TableCell>
                    <TableCell>Precio U</TableCell>
                    <TableCell align="right">SubTotal ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.items.map((activityRow: any) => (
                    <TableRow key={activityRow.id}>
                      <TableCell component="th" scope="row">
                        {activityRow.name}
                      </TableCell>
                      <TableCell>{activityRow.quantity}</TableCell>
                      <TableCell>{activityRow.unit_measure}</TableCell>
                      <TableCell>{activityRow.unit_price}</TableCell>
                      <TableCell align="right">{fCurrency(activityRow.subtotal)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default ActivityTable;

const StyledTableCell = styled(TableCell)(({ theme }: any) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
