import React, { Fragment, useState } from "react";
import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises/Exercises";
import defaultExercises, { muscles } from "../store";

function App() {
  const [category, setCategory] = useState("all");
  const [exercises, setExercises] = useState(defaultExercises);
  console.log(setExercises);

  function groupExercisesByMuscles() {
    const groupedExcercices = exercises.reduce((acc, exercice) => {
      const { muscles } = exercice;
      if (acc[muscles]) {
        acc[muscles].push(exercice);
      } else {
        acc[muscles] = [exercice];
      }

      return acc;
    }, {});

    return Object.entries(groupedExcercices);
  }

  function onCategorySelected(newCategory) {
    setCategory(newCategory);
    console.log(newCategory);
  }

  const groupedExcercices = groupExercisesByMuscles();
  return (
    <Fragment>
      <Header />

      <Exercises groupedExercises={groupedExcercices} category={category} />

      <Footer
        muscles={muscles}
        onCategorySelected={onCategorySelected}
        category={category}
      />
    </Fragment>
  );
}

export default App;
