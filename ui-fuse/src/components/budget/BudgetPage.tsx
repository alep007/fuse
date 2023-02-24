import { Stack, Typography } from "@mui/material";

import { Helmet } from "react-helmet-async";
import { budgetCardText } from "../../texts/budget/content";
import MainCard from "../common/cards/MainCard";
import BudgetNewButton from "./BudgetNewButton";
import BudgetTable from "./BudgetTable";

/**
 * Parent component to handle budget actions
 * route is "/budgets/all"
 * @returns
 */
const BudgetPage = () => {
  return (
    <>
      <Helmet>
        <title> Presupuesto </title>
      </Helmet>
      {/* @ts-ignore */}
      <MainCard title="Presupuestos">
        <Typography variant="body2">{budgetCardText}</Typography>
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
