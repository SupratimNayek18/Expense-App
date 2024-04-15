import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import styles from "./ExpenseItem.module.css";

function ExpenseItem({ index, title, price, description, removeExpense }) {
  const [stateTitle, setTitle] = useState(title);
  const clickHandler = () => {
    removeExpense(index);
  };
  return (
    <div className={styles.card}>
      <div className={styles.card_content}>
        <ExpenseDate />
        <h2>{stateTitle}</h2>
        <h2>{price}</h2>
        <h2>{description}</h2>
        <button className={styles.deleteTaskButton} onClick={clickHandler}>
          Delete Task
        </button>
      </div>
    </div>
  );
}

export default ExpenseItem;
