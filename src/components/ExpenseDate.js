import React from "react";
import styles from "./ExpenseDate.module.css";

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
  return (
    <div className={styles.card_date}>
      <p className="date_month">{month}</p>
      <p className="date_day">{day}</p>
      <p className="date_year">{year}</p>
    </div>
  );
}

export default ExpenseDate;
