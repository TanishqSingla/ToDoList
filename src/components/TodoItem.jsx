import React, { useState } from "react";

const TodoItem = (props) => {
  const [isDone, setIsDone] = useState(false);

  const handleClick = () => {
    setIsDone((prevBool) => !prevBool);
  };

  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.item}
      </li>
    </div>
  );
};

export default TodoItem;
