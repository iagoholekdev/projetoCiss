import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";
import produce from "immer";

export default function FormDialog(props) {
  const [editValues, setEditValues] = useState({
    id: props.id,
    Nome: props.Nome,
    Sobrenome: props.Sobrenome,
    email: props.email,
    NIS: props.NIS
  });

  const handleChangeValues = (values) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [values.target.id]: values.target.value,
    }));
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleEditEmployee = () => {
    debugger;
    Axios.put("http://localhost:8080/updateEmployee", {
      id: editValues.id,
      Nome: editValues.Nome,
      Sobrenome: editValues.Sobrenome,
      email: editValues.email,
      NIS: editValues.NIS
    }).then(() => {
      props.SetListEmp(
        props.listEmployee.map((value) => {
          return value.id == editValues.id
            ? {
                id: editValues.id,
                Nome: editValues.Nome,
                Sobrenome: editValues.Sobrenome,
                email: editValues.email,
                NIS: editValues.NIS
              }
            : value;
        })
      );
    });
    handleClose();
  };

  const handleDeleteEmployee = () => {
    debugger;
    Axios.delete(`http://localhost:8080/deleteEmployee/${editValues.id}`).then(() => {
      props.SetListEmp(
        props.listEmployee.filter((value) => {
          return value.id != editValues.id;
        })
      );
    });
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
          <TextField
            disabled
            margin="dense"
            id="id"
            label="id"
            defaultValue={props.id}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="Nome"
            label="Nome do funcionário"
            defaultValue={props.Nome}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="Sobrenome"
            label="Sobrenome: "
            defaultValue={props.Sobrenome}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            defaultValue={props.email}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="NIS"
            label="PIS: "
            defaultValue={props.NIS}
            type="number"
            onChange={handleChangeValues}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" onClick={() => handleDeleteEmployee()}>
            Excluir
          </Button>
          <Button color="primary" onClick={() => handleEditEmployee()}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}