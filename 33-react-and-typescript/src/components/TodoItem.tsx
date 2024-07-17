import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ text: string; onRemoveTask: () => void }> = (
  props
) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTask}>
      {props.text}
    </li>
  );
};

export default TodoItem;
