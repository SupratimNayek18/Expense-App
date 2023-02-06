import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ExpenseForm.css";
function ExpenseForm() {
  const [startDate, setStartDate] = useState(new Date());
  const handleClick = (data) => {
    console.log(data);
  };

  return (
    <form className="form-outer-div">
      <div className="form-title">
        <h3>Please Submit Your Expense Here</h3>
      </div>
      <div className="form-inner-div">
        <div className="input-group">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            wrapperClassName="datePicker"
            dateFormat="dd/MM/yyyy"
            className="input"
          />
        </div>
        <div className="input-group">
          <input type="text" className="input" />
          <label className="user-label">Expense Name</label>
        </div>
        <div className="input-group">
          <input type="text" className="input" />
          <label className="user-label">Expense Cost</label>
        </div>
        <div className="input-group">
          <input type="text" className="input" />
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
