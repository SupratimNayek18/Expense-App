import React from "react";
import "./ExpenseDate.css";

function ExpenseDate() {
  const date = new Date();
  const day = date.getDate();
  const year = date.getFullYear();
  const monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Novemvber",
    "December",
  ];
  const month = monthArray[date.getMonth()];
  console.log(day + " " + month + " " + year);
  return (
    <div className="card-date">
      <p className="date-month">{month}</p>
      <p className="date-day">{day}</p>
      <p className="date-year">{year}</p>
    </div>
  );
}

export default ExpenseDate;
