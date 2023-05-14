import { useEffect, useState, ChangeEvent } from "react";

function InputUseEffect() {
  const [inputValue, setInputValue] = useState("");
  const [stringValue, setstringValue] = useState("");
  const [count, setCount] = useState(0);
  const [calculate,setCalculate] = useState(0)

  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    setInputValue("apple");
  }, []);

  //   useEffect(()=>{
  //     setCount(count)
  //   })

  useEffect(()=>{
  setCalculate(count + 2)
  },[count])

  const handleChangeInputValue = () => {
    setstringValue("grapes");
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement =()=>{
    setCount(prevCount=>prevCount-1)
  }
  return (
    <div>
      <label>Input</label>{" "}
      <input type="text" value={inputValue} onChange={handleValueChange} />
      <h4>{stringValue}</h4>
      <button onClick={handleChangeInputValue}>Change input value</button>
      <hr />
      <button onClick={handleIncrement}>Increment</button>
      <h2>Count : {count}</h2>
      <h2>Calculate : {calculate}</h2>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
}

export default InputUseEffect;
