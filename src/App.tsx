import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [post, setPost] = useState('posts');
  // const [user, setUset] = useState('user');
  // const [comment, setComment] = useState('comment');
  const[items,setItems] = useState([])

  // const handlePostClick=()=>{
  //   setPost('posts')
  // }
  // const handleUserClick=()=>{
  //   setPost('user')
  // }
  // const handleCommentClick=()=>{
  //   setPost('comment')
  // }

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${post}`)
      .then(response => response.json())
      .then(json => setItems(json))
    console.log("post useEffect");
    
  },[post])

  return <div className="App">
    <button onClick={()=>setPost('post')}>post</button>
    <button onClick={()=>setPost('user')}>user</button>
    <button onClick={()=>setPost('comment')}>comment</button>
    <h3>{post}</h3>
    {items.map((item)=>{
     return <pre>{JSON.stringify(item)}</pre>
    })}
  </div>;
}

export default App;
