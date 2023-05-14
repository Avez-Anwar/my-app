import React, { useState } from "react";
import uuid from 'react-uuid';

function List() {
  const [fruits, setFruits] = useState([
    { title: "apple", id: 1 },
    { title: "mango", id: 2 },
    { title: "grapes", id: 3 },
  ]);

  const handleFruitClick = () => {
    setFruits([
      ...fruits,
      {
        title: "orange",
        id: uuid(),
      },
    ]);
  };

  console.log(fruits);
  return (
    <div>
      <h1>List</h1>
      {fruits.map((fruit) => {
        return <li key={fruit.id}>{fruit.title}</li>;
      })}
      <br />
      <button onClick={handleFruitClick}>Add Fruit</button>
    </div>
  );
}

export default List;
