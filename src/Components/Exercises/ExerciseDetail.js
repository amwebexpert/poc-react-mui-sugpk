import React from "react";
import { Fragment } from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  detail: {
    marginTop: 20
  }
}));

export function ExerciseDetail({ exercise }) {
  const styles = useStyles();

  function getTitle() {
    if (exercise) {
      return exercise.title;
    } else {
      return "Welcome!";
    }
  }

  function getDescription() {
    if (exercise) {
      return exercise.description;
    } else {
      return "Please select an exercise from the list";
    }
  }

  return (
    <Fragment>
      <Typography variant="h4">{getTitle()}</Typography>
      <Typography variant="body1" className={styles.detail}>
        {getDescription()}
      </Typography>
    </Fragment>
  );
}
