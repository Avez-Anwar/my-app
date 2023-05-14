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
  const [title,setTitle] = useState("")

  const handleVegetableClick=()=>{
     setVegetables([...vegetables,{title,id:uuid()}])
  }

  const handleChange = (e) =>{
    setTitle(e.target.value)
  }

  const handleSubmit=(e)=>{
      e.preventDefault()
      console.log(title)
      handleVegetableClick(title)
      setTitle("")
  }


  return (
    <div>
      <h1>ListArray</h1>
      {vegetables.map((vegetable) => {
        return <li key={vegetable.id}>{vegetable.title}</li>
      })}
      <br/>
        {/* <button onClick={handleVegetableClick}>Add Vegetable</button> */}
        <form  onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={handleChange}/>
            <button>Add</button>
        </form>
    </div>
  );
}

export default ListArray;
