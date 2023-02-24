import { Box, Grid, Paper, Stack, Typography } from "@mui/material";

import atom, { budgetTotalSelector } from "../../recoil/budget";
import { useRecoilValue } from "recoil";

/**
 * Component that shows a summary about the current budget
 * @returns
 */
const BudgetSummaryPaper = () => {
  const budgetSummary = useRecoilValue(atom);

  const budgetTotal = useRecoilValue(budgetTotalSelector);

  const showTotal = budgetTotal? budgetTotal : " Bs. 0";
  return (
    <Grid container gridRow={2} spacing={2}>
      <Grid item xs={8}>
        <Paper sx={{ height: "100%" }} elevation={2}>
          <Grid container gridRow={2}>
            <Stack spacing={4} p={4} direction={"row"}>
              <Grid item xs={9}>
                <Stack spacing={2}>
                  <Typography variant="h4"> Resumen de presupuesto</Typography>
                  <br />
                  <Typography variant="body1" alignContent={"center"}>
                    Presupuesto: {budgetSummary.name}
                  </Typography>
                  <Typography variant="body2"> Fecha: {budgetSummary.date}</Typography>
                  <Typography variant="body2"> Descripcion: {budgetSummary.description}</Typography>
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Box component="img" src="/assets/empty-activities.svg" sx={{ width: "60%" }} />
              </Grid>
            </Stack>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={2}>
          <Stack spacing={1} p={4} sx={{ alignItems: "center" }}>
            <Box component="img" src="/assets/budget-total.svg" sx={{ width: "30%", height: "30%" }} />

            <br />
            <Typography> Total acumulado: {showTotal}</Typography>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default BudgetSummaryPaper;
