import React, {useState} from "react";
import "./expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../Card";
import ExpenseFilter from "./ExpenseFilter";

function Expenses({items}) {

  const [filteredYear, setFilteredYear] = useState(2021)

const filterChangeHandler = (selectedYear)=>{
console.log(selectedYear)
console.log(filteredYear)
}


  return (
    <Card className="expenses">
      <ExpenseFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler}/>
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
