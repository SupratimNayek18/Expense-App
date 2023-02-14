import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ExpenseForm.css";
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
    <form className="form-outer-div" onSubmit={handleSubmit}>
      <div className="form-title">
        <h3>Please Submit Your Expense Here</h3>
      </div>
      <div className="form-inner-div">
        <div className="input-group">
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
            }}
            wrapperClassName="datePicker"
            dateFormat="dd/MM/yyyy"
            className="input"
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            className="input"
            onChange={(event) => setExpenseName(event.target.value)}
            required
          />
          <label className="user-label">Expense Name</label>
        </div>
        <div className="input-group">
          <input
            type="text"
            className="input"
            onChange={(event) => setExpenseCost(event.target.value)}
            required
          />
          <label className="user-label">Expense Cost</label>
        </div>
        <div className="input-group">
          <input
            type="text"
            className="input"
            onChange={(event) => setExpenseDescription(event.target.value)}
            required
          />
          <label className="user-label">Expense Description</label>
        </div>
      </div>
      <button type="submit" className="expense-form-submit-button">
        <span></span>
        <span></span>
        <span></span>
        <span></span> Submit
      </button>
    </form>
  );
}

export default ExpenseForm;
