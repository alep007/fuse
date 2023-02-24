import {
  Box,
  Collapse,
  Grid,
  IconButton,
  Paper,
  Stack,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "mui-image";
import React from "react";
import { useRecoilValue } from "recoil";
import budgetAtom from "../../recoil/budget/atom";
import { ActivityToAdd } from "../../types/Composition.type";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { fCurrency } from "../../utils/formatNumber";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const BudgetDetailTable = () => {
  const budgetActivities = useRecoilValue(budgetAtom);
  let renderElement: any;
  if (budgetActivities.activities!.length === 0) {
    renderElement = (
      <Stack p={12} alignItems="center" justifyContent="center" spacing={0}>
        <Image width="20%" src={process.env.PUBLIC_URL + "/assets/empty-activities.svg"} fit="cover" duration={500} />
        <h4> No tienes actividades registradas</h4>
      </Stack>
    );
  } else {
    renderElement = (
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <StyledTableCell />
              <StyledTableCell>Nombre</StyledTableCell>
              <StyledTableCell align="right">Categoria</StyledTableCell>
              <StyledTableCell align="right">Precio</StyledTableCell>
              <StyledTableCell align="right">U/medida</StyledTableCell>
              <StyledTableCell align="right">Cantidad</StyledTableCell>
              <StyledTableCell align="right">SubTotal</StyledTableCell>
              <StyledTableCell align="center">Accion</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {budgetActivities.activities!.map((activity: ActivityToAdd) => (
              <Row key={activity.id} row={activity} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  return <Paper>{renderElement}</Paper>;
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
        <TableCell align="right">{row.quantity}</TableCell>
        <TableCell align="right">{row.subtotal}</TableCell>
        <TableCell align="center">
          <BudgetItemActions />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h5" gutterBottom component="div">
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
                    <TableRow key={activityRow.item_id}>
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

export default BudgetDetailTable;

const BudgetItemActions = () => {
  return (
    <Grid container spacing={1} justifyContent="center" alignItems="center">
      <Grid item xs={2} />
      <Grid item xs={4}>
        <Tooltip title="Editar">
          <IconButton>
            <EditIcon />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item xs={4}>
        <Tooltip title="Eliminar">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

const StyledTableCell = styled(TableCell)(({ theme }: any) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
