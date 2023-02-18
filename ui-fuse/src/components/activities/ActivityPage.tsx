import { Paper, Stack, Typography } from "@mui/material";
import MainCard from "../common/cards/MainCard";

import ActivitySearchBox from "./ActivitySearchBox";

import ActivityTable from "./ActivityTable";

const ActivityPage = () => {
  return (
    <>
      <Stack spacing={2}>
        {/* @ts-ignore */}
        <MainCard title="Busqueda de composiciones">
          <Typography variant="body2">
            En esta seccion, podras buscar las composiciones para tu presupuesto, ver los materiales que las componen y
            agregarlas a tu lista
          </Typography>
        </MainCard>
        <Paper>
          <ActivitySearchBox />
        </Paper>
        <ActivityTable />
      </Stack>
    </>
  );
};

export default ActivityPage;
