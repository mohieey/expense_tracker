import React, { useState } from "react";

import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const changeFilterHandler = (year) => {
    setFilteredYear(year);
  };

  return (
    <div>
      <ExpensesFilter
        selectedYear={filteredYear}
        onChageFilter={changeFilterHandler}
      ></ExpensesFilter>
      <Card className="expenses">
        {props.expenses.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
