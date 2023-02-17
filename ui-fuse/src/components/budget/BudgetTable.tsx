import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
  Collapse,
  tableCellClasses,
  Grid,
  Button,
  SvgIcon,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import React from "react";
import { fCurrency } from "../../utils/formatNumber";
import { fDate } from "../../utils/formatTime";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { SECONDARY, WHITE } from "../../appBase/theme/palette";

type BudgetItem = {
  id: string;
  name: string;
  total: number;
  date: string;
  activities: Activity[];
};

type Activity = {
  id: string;
  name: string;
  quantity: number;
  unitMeausure: string;
  unitPrice: number;
  subTotal: number;
};

const BudgetTable = () => {
  const rows: Array<BudgetItem> = [
    {
      id: "1",
      name: "mi primer presupuesto",
      total: 1000.43,
      date: "01/03/2023",
      activities: [
        {
          id: "1",
          name: "baliza 4g",
          quantity: 4,
          unitMeausure: "pza",
          unitPrice: 200.0,
          subTotal: 800.0,
        },
        {
          id: "1",
          name: "muro 10m2",
          quantity: 1,
          unitMeausure: "m2",
          unitPrice: 200,
          subTotal: 200,
        },
      ],
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <StyledTableCell />
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell align="right">Fecha</StyledTableCell>
            <StyledTableCell align="right">Total</StyledTableCell>
            <StyledTableCell align="center">Acciones</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const Row = (props: { row: BudgetItem }) => {
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
        <TableCell align="right">{fDate(row.date)}</TableCell>
        <TableCell align="right">{fCurrency(row.total)}</TableCell>
        <TableCell align="right">
          <BudgetItemActions />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Actividades
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre actividad</TableCell>
                    <TableCell>Cantidad</TableCell>
                    <TableCell>Unidad</TableCell>
                    <TableCell align="right">SubTotal ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.activities.map((activityRow) => (
                    <TableRow key={activityRow.id}>
                      <TableCell component="th" scope="row">
                        {activityRow.name}
                      </TableCell>
                      <TableCell>{activityRow.quantity}</TableCell>
                      <TableCell>{activityRow.unitMeausure}</TableCell>
                      <TableCell align="right">{fCurrency(activityRow.subTotal)}</TableCell>
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

const BudgetItemActions = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <IconButton>
          <EditIcon sx={{ color: SECONDARY.light }} />
        </IconButton>
      </Grid>
      <Grid item xs={4}>
        <IconButton>
          <img src={process.env.PUBLIC_URL + "/assets/excel.svg"} />
        </IconButton>
      </Grid>
      <Grid item xs={4}>
        <IconButton>
          <DeleteIcon sx={{ color: SECONDARY.darker }} />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default BudgetTable;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
