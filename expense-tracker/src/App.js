import Expenses from "./components/expeses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";
import { useState } from "react";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 18)},
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2019, 5, 12),
    },
    {
      id: "e5",
      title: "New Book",
      amount: 500,
      date: new Date(2019, 3, 21),
    },
  ];

  const [expenseArray, setExpenseArray] = useState(expenses);

  const addExpenseHandler = (expense) => {
    setExpenseArray((prevExpenseArray) => [expense, ...prevExpenseArray]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenseArray} />
    </div>
  );
}

export default App;
