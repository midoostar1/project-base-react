import React from "react";
import "./expenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";


//destructured props in the function declaration.
function ExpenseItem(props) {
  console.log(props.title);
  return (
    <Card className="expense-item">
        <ExpenseDate date = {props.date}/>
      <div className="expense-item__description"></div>
      <h2>{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
    </Card>
  );
}

export default ExpenseItem;
