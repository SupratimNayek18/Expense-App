import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import styles from "./ExpenseItem.module.css";

function ExpenseItem({ title, price, description }) {
  const [stateTitle, setTitle] = useState(title);
  const clickHandler = () => {
    setTitle("Updated!");
  };
  return (
    <div className={styles.card}>
      <div className={styles.card_content}>
        <ExpenseDate />
        <h2>{stateTitle}</h2>
        <h2>{price}</h2>
        <h2>{description}</h2>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </div>
  );
}

export default ExpenseItem;
