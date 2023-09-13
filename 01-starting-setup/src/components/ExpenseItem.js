import React from "react";
import "./expenseItem.css";
import ExpenseDate from "./ExpenseDate";

//destructured props in the function declaration.
function ExpenseItem({ title, date, amount }) {
  return (
    <div className="expense-item">
        <ExpenseDate date = {date}/>
      <div className="expense-item__description"></div>
      <h2>{title}</h2>
      <div className="expense-item__price">${amount}</div>
    </div>
  );
}

export default ExpenseItem;
