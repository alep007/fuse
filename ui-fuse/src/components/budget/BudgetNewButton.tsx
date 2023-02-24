import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { PRIMARY, SECONDARY, WHITE } from "../../appBase/theme/palette";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import { budgetSelector } from "../../recoil/budget";
import { useRecoilState } from "recoil";
import { BudgetAtomProps } from "../../recoil/budget/atom";

type FormProps = Partial<BudgetAtomProps>;

/**
 * FAB button that handles first step for new budget creation
 * @returns
 */
const BudgetNewButton = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [budget, setBudgetHeader] = useRecoilState(budgetSelector);

  const onSubmit = (data: FormProps) => {
    data.date = new Date().toDateString();
    setBudgetHeader({ ...budget, ...data });
    navigate("/budgets/new");
  };

  return (
    <>
      <StyledFloatButton color="secondary" onClick={handleOpen}>
        <AddIcon sx={{ color: WHITE.main }} />
      </StyledFloatButton>
      <Dialog open={open} sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: 435 } }} maxWidth="xs">
        <FormContainer onSuccess={onSubmit}>
          <DialogTitle sx={{ backgroundColor: PRIMARY.main }}>
            <Typography variant="h4" color={WHITE.main}>
              Nuevo Presupuesto
            </Typography>
          </DialogTitle>
          <DialogContent>
            <Stack spacing={2} padding={2}>
              <TextFieldElement name="name" label="Nombre" required type="text" />
              <TextFieldElement name="description" label="Notas adicionales" multiline={true} rows={3} />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="contained" sx={{ backgroundColor: SECONDARY.main, color: WHITE.main }} type="submit">
              Crear
            </Button>
          </DialogActions>
        </FormContainer>
      </Dialog>
    </>
  );
};

export default BudgetNewButton;

const StyledFloatButton = styled(Fab)({
  margin: 0,
  top: "auto",
  right: 32,
  bottom: 16,
  left: "auto",
  position: "fixed",
});
