import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Box from "@material-ui/core/Box";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  Fab,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { muscles } from "../../../store";

const useStyles = makeStyles(theme => ({
  actions: {
    marginTop: theme.spacing(4)
  }
}));

export function CreateDialog() {
  const styles = useStyles();
  const [open, setOpen] = React.useState(false);
  const [exercise, setExercise] = React.useState({
    title: "",
    description: "",
    muscles: ""
  });

  const toggleDialog = () => {
    setOpen(!open);
  };

  function handleChange(e, fieldName) {
    setExercise({
      ...exercise,
      [fieldName]: e.target.value
    });
  }

  return (
    <Fragment>
      <Fab aria-label="add" size="small" onClick={toggleDialog}>
        <AddIcon />
      </Fab>

      <Dialog fullWidth maxWidth="sm" open={open} onClose={toggleDialog}>
        <DialogTitle id="form-dialog-title">
          Create a new exercise with a bit title...
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Please fill out the form below</DialogContentText>
          <form>
            <FormControl fullWidth>
              <InputLabel id="muscles">Muscles</InputLabel>
              <Select
                labelId="muscles"
                name="muscles"
                value={exercise.muscles}
                onChange={e => handleChange(e, "muscles")}
              >
                {muscles.map(muscle => (
                  <MenuItem value={muscle}>{muscle}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <br />

            <TextField
              required
              name="title"
              value={exercise.title}
              onChange={e => handleChange(e, "title")}
              label="Exercise name"
              fullWidth
            />
            <br />

            <TextField
              required
              multiline
              rows="3"
              name="description"
              value={exercise.description}
              onChange={e => handleChange(e, "description")}
              label="Exercise description"
              fullWidth
            />
            <br />

            <Box
              fullWidth
              display="flex"
              justifyContent="flex-end"
              className={styles.actions}
            >
              <Button
                onClick={toggleDialog}
                color="primary"
                variant="contained"
              >
                Create
              </Button>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}
