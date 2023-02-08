import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ExpenseForm.css";
function ExpenseForm() {
  const [startDate, setStartDate] = useState(new Date());
  const [expenseName, setExpenseName] = useState("");
  const [expenseCost, setExpenseCost] = useState("");
  const [expenseDescription, setExpenseDescription] = useState("");
  const handleClick = () => {
    console.log({
      date: startDate,
      name: expenseName,
      cost: expenseCost,
      description: expenseDescription,
    });
  };

  return (
    <form
      className="form-outer-div"
      onSubmit={(event) => event.preventDefault()}
    >
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
          />
          <label className="user-label">Expense Name</label>
        </div>
        <div className="input-group">
          <input
            type="text"
            className="input"
            onChange={(event) => setExpenseCost(event.target.value)}
          />
          <label className="user-label">Expense Cost</label>
        </div>
        <div className="input-group">
          <input
            type="text"
            className="input"
            onChange={(event) => setExpenseDescription(event.target.value)}
          />
          <label className="user-label">Expense Description</label>
        </div>
      </div>
      <button onClick={handleClick} className="expense-form-submit-button">
        <span></span>
        <span></span>
        <span></span>
        <span></span> Submit
      </button>
    </form>
  );
}

export default ExpenseForm;
