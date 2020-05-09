import React, { Fragment } from "react";
import { Typography, List, ListItemText, MenuItem } from "@material-ui/core";

export function ExercicesCategory({
  group,
  exercises,
  onItemSelected,
  selectedId
}) {
  return (
    <Fragment key={group}>
      <Typography variant="h6" style={{ textTransform: "capitalize" }}>
        {group}
      </Typography>

      <List component="ul" dense>
        {exercises.map(({ id, title }) => (
          <MenuItem button selected={id === selectedId}>
            <ListItemText
              key={id}
              primary={title}
              onClick={_ => onItemSelected(id)}
            />
          </MenuItem>
        ))}
      </List>
    </Fragment>
  );
}
