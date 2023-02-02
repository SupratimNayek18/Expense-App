import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem({ data }) {
  const [title, setTitle] = useState(data.title);
  const clickHandler = () => {
    setTitle("Updated!");
  };
  return (
    <div className="card">
      <div className="card-content">
        <ExpenseDate />
        <h2>{title}</h2>
        <h2>{data.price}</h2>
        <h2>{data.description}</h2>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </div>
  );
}

export default ExpenseItem;
