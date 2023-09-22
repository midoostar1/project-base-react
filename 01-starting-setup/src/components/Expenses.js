import React from "react";
import "./expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses({items}) {
  return (
    <Card className="expenses">
      {items.map((item, id) => (
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
          key = {id}
        />
      ))}
    </Card>
  );
}

export default Expenses;
