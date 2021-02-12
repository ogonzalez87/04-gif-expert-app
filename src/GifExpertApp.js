import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball Z",
  ]);

  // const handleAdd = () => {
// setCategories(["HunterXHunter", ...categories]);
  // };

  return (
    <>
      <h2> GifExpertApp</h2>
      <hr />
      <AddCategory setCategories = {setCategories}/>
      <ol>
        {categories.map((category) => {
          return <li key={category}> {category} </li>;
        })}
      </ol>
    </>
  );
};
