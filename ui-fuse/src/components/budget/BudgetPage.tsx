import { Stack, Typography } from "@mui/material";

import { createRef } from "react";
import { Helmet } from "react-helmet-async";
import MainCard from "../common/cards/MainCard";
import BudgetNewButton from "./BudgetNewButton";
import BudgetTable from "./BudgetTable";

const BudgetPage = () => {
  return (
    <>
      <Helmet>
        <title> Presupuesto </title>
      </Helmet>
      {/* @ts-ignore */}
      <MainCard title="Presupuestos">
        <Typography variant="body2">
          En esta seccion, podras ver tus presupuestos, crear nuevo presupuesto, exportar un presupuesto a Excel y
          muchas cosas más.
        </Typography>
      </MainCard>

      <br />
      <Stack spacing={2}>
        <BudgetTable />
      </Stack>

      <BudgetNewButton />
    </>
  );
};

export default BudgetPage;
