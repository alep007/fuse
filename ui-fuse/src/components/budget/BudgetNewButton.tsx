import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, Stack } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { SECONDARY, WHITE } from "../../appBase/theme/palette";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import { budgetSelector } from "../../recoil/budget";
import { useSetRecoilState } from "recoil";
import { BudgetAtomProps } from "../../recoil/budget/atom";

type FormProps = Partial<BudgetAtomProps>;

const BudgetNewButton = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const setBudgetHeader = useSetRecoilState(budgetSelector);

  const onSubmit = (data: FormProps) => {
    setBudgetHeader(data);
    navigate("/budgets/new");
  };

  return (
    <>
      <StyledFloatButton color="secondary" onClick={handleOpen}>
        <AddIcon sx={{ color: WHITE.main }} />
      </StyledFloatButton>
      <Dialog open={open} sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: 435 } }} maxWidth="xs">
        <FormContainer onSuccess={onSubmit}>
          <DialogTitle>Nuevo Presupuesto</DialogTitle>
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
            <Button variant="contained" sx={{ backgroundColor: SECONDARY.dark, color: WHITE.main }} type="submit">
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
