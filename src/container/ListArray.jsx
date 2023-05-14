import React, { useEffect, useState } from "react";
import uuid from "react-uuid";

const vegetablesList = [
  {
    title: "tomato",
    id: 1,
  },
  {
    title: "carrot",
    id: 2,
  },
  {
    title: "potato",
    id: 3,
  },
];

function ListArray() {
  const [vegetables, setVegetables] = useState(vegetablesList);

  const handleVegetableClick=()=>{
     setVegetables([...vegetables,{title:'onion',id:uuid()}])
  }

  console.log("vegan", vegetablesList);
  return (
    <div>
      <h1>ListArray</h1>
      {vegetables.map((vegetable) => {
        return <li key={vegetable.id}>{vegetable.title}</li>
      })}
      <br/>
        <button onClick={handleVegetableClick}>Add Vegetable</button>
    </div>
  );
}

export default ListArray;
