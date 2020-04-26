import React, { useState } from "react";
import TodoItem from "./TodoItem";

function App() {
  const [inputText, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const addItem = () => {
    setItems((prevItems) => [...prevItems, inputText]);
  };

  const deleteItem = () => {};

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputText} onChange={handleChange} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <TodoItem item={todoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
