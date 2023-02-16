import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./ExpenseForm.module.css";
function ExpenseForm({ addNewExpense }) {
  const [startDate, setStartDate] = useState(new Date());
  const [expenseName, setExpenseName] = useState("");
  const [expenseCost, setExpenseCost] = useState("");
  const [expenseDescription, setExpenseDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      date: startDate,
      name: expenseName,
      cost: expenseCost,
      description: expenseDescription,
    });
    addNewExpense({
      id: Math.random(),
      title: expenseName,
      price: expenseCost,
      description: expenseDescription,
    });
  };

  return (
    <form className={styles.form_outer_div} onSubmit={handleSubmit}>
      <div className={styles.form_title}>
        <h3>Please Submit Your Expense Here</h3>
      </div>
      <div className={styles.form_inner_div}>
        <div className={styles.input_group}>
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
            }}
            wrapperClassName="datePicker"
            dateFormat="dd/MM/yyyy"
            className={styles.input}
          />
        </div>
        <div className={styles.input_group}>
          <input
            type="text"
            className={styles.input}
            onChange={(event) => setExpenseName(event.target.value)}
            required
          />
          <label className={styles.user_label}>Expense Name</label>
        </div>
        <div className={styles.input_group}>
          <input
            type="text"
            className={styles.input}
            onChange={(event) => setExpenseCost(event.target.value)}
            required
          />
          <label className={styles.user_label}>Expense Cost</label>
        </div>
        <div className={styles.input_group}>
          <input
            type="text"
            className={styles.input}
            onChange={(event) => setExpenseDescription(event.target.value)}
            required
          />
          <label className={styles.user_label}>Expense Description</label>
        </div>
      </div>
      <button type="submit" className={styles.expense_form_submit_button}>
        <span></span>
        <span></span>
        <span></span>
        <span></span> Submit
      </button>
    </form>
  );
}

export default ExpenseForm;
