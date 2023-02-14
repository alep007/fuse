import { Button, Grid, Paper, Stack } from "@mui/material";

import atom from "../../recoil/budget";
import { useRecoilValue } from "recoil";

const BudgetSummaryPaper = () => {
  const budgetSummary = useRecoilValue(atom);
  return (
    <Paper>
      <Grid container gridRow={2}>
        <Grid item xs={10}>
          <Stack spacing={1} p={4}>
            <h5>{budgetSummary.name}</h5>
            <h6>Fecha: 13 Febrero 2023</h6>
            <h6> {budgetSummary.description}</h6>
            <br />
            <h3> Total acumulado Bs 2000.40 </h3>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default BudgetSummaryPaper;
