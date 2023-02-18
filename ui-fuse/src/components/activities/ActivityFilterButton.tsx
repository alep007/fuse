import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import { SECONDARY, WHITE } from "../../appBase/theme/palette";
import { FormContainer } from "react-hook-form-mui";
import { useState } from "react";

const ActivityFilterButton = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = (data: any) => {};

  const categoryArray = [
    { id: 1, name: "mamposteria" },
    { id: 2, name: "muros" },
    { id: 3, name: "electricidad" },
    { id: 4, name: "fluvial" },
    { id: 5, name: "mano de obra" },
    { id: 6, name: "pintura" },
    { id: 7, name: "cerrajeria" },
    { id: 8, name: "algo" },
    { id: 9, name: "bardo" },
  ];

  return (
    <>
      <Button variant="contained" color="primary" size="large" onClick={handleOpen}>
        Filtros
      </Button>
      <Dialog open={open} sx={{ "& .MuiDialog-paper": { width: "90%", maxHeight: 435 } }} maxWidth="xs">
        <FormContainer onSuccess={onSubmit}>
          <DialogTitle>
            <Typography variant="body1">Categorias </Typography>
          </DialogTitle>
          <DialogContent>
            <FormControl component="fieldset" variant="standard">
              <FormGroup>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  {categoryArray.map((category) => (
                    <Grid item xs={2} sm={4} md={4} key={category.id}>
                      <FormControlLabel control={<Checkbox name={category.name} />} label={category.name} />
                    </Grid>
                  ))}
                </Grid>
              </FormGroup>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button> Limpiar Filtros</Button>
            <Button variant="outlined" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="contained" sx={{ backgroundColor: SECONDARY.main, color: WHITE.main }} type="submit">
              Aceptar
            </Button>
          </DialogActions>
        </FormContainer>
      </Dialog>
    </>
  );
};

export default ActivityFilterButton;
