import { Box, Paper, Stack } from "@mui/material";
import Image from "mui-image";

const BudgetDetailTable = () => {
  const list: Array<unknown> = [];
  let renderElement: any;
  if (list.length === 0) {
    renderElement = (
      <Stack p={16} alignItems="center" justifyContent="center" spacing={1}>
        <Image width="40%" src={process.env.PUBLIC_URL + "/assets/empty-activities.svg"} fit="cover" duration={500} />
        <h4> No tienes actividades registradas</h4>
      </Stack>
    );
  }

  return <Paper>{renderElement}</Paper>;
};
export default BudgetDetailTable;
