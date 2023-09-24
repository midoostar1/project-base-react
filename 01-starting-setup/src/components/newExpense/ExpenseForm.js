import React, { useState } from "react";
import "./expenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (evt) => {
    setEnteredTitle(evt.target.value);
  };

  const amountChangeHandler = (evt) => {
    setEnteredAmount(evt.target.value);
  };

  const dateChangeHandler = (evt) => {
    setEnteredDate(evt.target.value);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount, 
        date: enteredDate
        
    }
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('')
    setEnteredAmount(''); 
    setEnteredDate('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>

        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
