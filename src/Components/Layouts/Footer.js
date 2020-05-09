import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Tooltip } from "@material-ui/core";

const Footer = ({ muscles, onCategorySelected, category }) => {
  const [value, setValue] = React.useState(categoryToIndex(category));

  const handleChange = (_, newValue) => {
    setValue(newValue);
    const category = newValue ? muscles[newValue - 1] : "all";
    onCategorySelected(category);
  };

  function categoryToIndex(cat) {
    return cat ? muscles.findIndex(el => el === cat) + 1 : 0;
  }

  return (
    <Paper elevation={3}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="List of muscles"
      >
        <Tab key="all" label="All" />
        {muscles.map(group => (
          <Tooltip title={`Show ${group} exercices`}>
            <Tab key={group} label={group} />
          </Tooltip>
        ))}
      </Tabs>
    </Paper>
  );
};

export default Footer;
