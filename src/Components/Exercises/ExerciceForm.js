import React from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles
} from "@material-ui/core";
import { muscles } from "../../../store";

const useStyles = makeStyles(theme => ({
  actions: {
    marginTop: theme.spacing(4)
  }
}));

export function ExerciceForm() {
  const styles = useStyles();
  const [exercise, setExercise] = React.useState({
    title: "",
    description: "",
    muscles: ""
  });

  function handleChange(e, fieldName) {
    setExercise({
      ...exercise,
      [fieldName]: e.target.value
    });
  }

  function submitForm() {
    alert(1);
  }

  return (
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
        <Button onClick={submitForm} color="primary" variant="contained">
          Create
        </Button>
      </Box>
    </form>
  );
}
