import React from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import { ExercicesCategory } from "./ExercicesCategory";
import { ExerciseDetail } from "./ExerciseDetail";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    height: 500,
    overflowY: "auto"
  }
}));

export default function Exercices({ groupedExercises, category }) {
  const styles = useStyles();
  const [selectedId, setSelectedId] = React.useState(null);

  function canDisplay(group) {
    if (category === "all") {
      return true;
    }

    return group === category;
  }

  function onItemSelected(id) {
    setSelectedId(id);
  }

  function getSelectedExercise() {
    if (!selectedId) {
      return null;
    }

    return groupedExercises
      .flatMap(([_, exercises]) => exercises)
      .find(e => e.id === selectedId);
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs>
        <Paper className={styles.paper} elevation={3}>
          {groupedExercises.map(([group, exercises]) =>
            canDisplay(group) ? (
              <ExercicesCategory
                group={group}
                exercises={exercises}
                selectedId={selectedId}
                onItemSelected={onItemSelected}
              />
            ) : null
          )}
        </Paper>
      </Grid>

      <Grid item xs>
        <Paper className={styles.paper} elevation={3}>
          <ExerciseDetail exercise={getSelectedExercise()} />
        </Paper>
      </Grid>
    </Grid>
  );
}
