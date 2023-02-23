import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormGroup,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { PRIMARY, SECONDARY, WHITE } from "../../appBase/theme/palette";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import { useState } from "react";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { fCurrency } from "../../utils/formatNumber";

const ActivityAddButton = ({ item }: any) => {
  const [open, setOpen] = useState(false);
  const [subTotal, setSubTotal] = useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = (data: any) => {};

  const onChangeQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    const quantity = event.target.value as unknown as number;
    setSubTotal(quantity * item.price);
  };

  return (
    <>
      <Tooltip title="Agregar">
        <IconButton onClick={handleOpen}>
          <NoteAddIcon sx={{ color: SECONDARY.main }} />
        </IconButton>
      </Tooltip>
      <Dialog open={open} sx={{ "& .MuiDialog-paper": { width: "90%", maxHeight: 435 } }} maxWidth="xs">
        <FormContainer onSuccess={onSubmit}>
          <DialogTitle sx={{ backgroundColor: PRIMARY.main }}>
            <Typography variant="h4" color={WHITE.main}>
              Agregar nueva composicion{" "}
            </Typography>
          </DialogTitle>
          <DialogContent>
            <FormControl component="fieldset" variant="standard">
              <FormGroup>
                <br />
                <TextField
                  id={item.name}
                  label="Composicion"
                  defaultValue={item.name}
                  variant="filled"
                  inputProps={{ readOnly: true }}
                />
                <TextField
                  id={item.category}
                  label="Categoria"
                  defaultValue={item.category}
                  variant="filled"
                  inputProps={{ readOnly: true }}
                />
                <TextField
                  id={item.unit_measure}
                  label="Unidad de medida"
                  defaultValue={item.unit_measure}
                  variant="filled"
                  inputProps={{ readOnly: true }}
                />

                <Stack spacing={4} padding={4} direction="row">
                  <TextFieldElement
                    name="quantity"
                    label="Cantidad"
                    required
                    type="text"
                    onChange={onChangeQuantity}
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  />
                  <TextField
                    id={item.price}
                    label="Precio Unitario"
                    defaultValue={item.price}
                    variant="outlined"
                    inputProps={{ readOnly: true }}
                  />
                </Stack>
                <Typography variant="body1"> Subtotal: {fCurrency(subTotal)}</Typography>
              </FormGroup>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="contained" sx={{ backgroundColor: SECONDARY.main, color: WHITE.main }} type="submit">
              Agregar
            </Button>
          </DialogActions>
        </FormContainer>
      </Dialog>
    </>
  );
};

export default ActivityAddButton;
