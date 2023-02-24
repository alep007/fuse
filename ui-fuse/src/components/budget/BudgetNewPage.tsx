import styled from "@emotion/styled";
import { Button, Fab, Stack } from "@mui/material";
import BudgetDetailTable from "./BudgetDetailTable";
import BudgetSummaryPaper from "./BudgetSummaryPaper";
import SaveIcon from "@mui/icons-material/Save";
import { WHITE } from "../../appBase/theme/palette";
import { useNavigate } from "react-router-dom";

const BudgetNewPage = () => {
  const navigate = useNavigate();

  const onClickNewActivity = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    navigate("/budgets/activities");
  };

  return (
    <>
      <BudgetSummaryPaper />
      <br />

      <Stack spacing={{ xs: 1, sm: 1, md: 1 }} direction="row" justifyContent="flex-start" alignItems="flex-start">
        <Button variant="contained" color="info" size="large">
          Nuevo grupo
        </Button>
        <Button variant="contained" color="primary" size="large" onClick={onClickNewActivity}>
          Nueva Actividad
        </Button>
      </Stack>
      <br />
      <BudgetDetailTable />
      <StyledFloatButton color="secondary">
        <SaveIcon sx={{ color: WHITE.main }} />
      </StyledFloatButton>
    </>
  );
};

export default BudgetNewPage;

const StyledFloatButton = styled(Fab)({
  margin: 0,
  top: "auto",
  right: 32,
  bottom: 20,
  left: "auto",
  position: "fixed",
});
