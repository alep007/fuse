import { Container, Stack, Typography } from "@mui/material";

import React from "react";
import { Helmet } from "react-helmet-async";
import BudgetNewButton from "./BudgetNewButton";
import BudgetTable from "./BudgetTable";

const BudgetPage = () => {
  return (
    <>
      <Helmet>
        <title> Presupuesto </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Presupuestos
          </Typography>
        </Stack>

        <Stack spacing={2}>
          <BudgetTable />
        </Stack>

        <BudgetNewButton />
      </Container>
    </>
  );
};

export default BudgetPage;
