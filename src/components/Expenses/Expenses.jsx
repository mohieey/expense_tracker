import React, { useState } from "react";

import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "../ExpensesList/ExpensesList";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const changeFilterHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = expenses.filter(
    (item) => item.date.getFullYear() === parseInt(filteredYear)
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onChageFilter={changeFilterHandler}
      ></ExpensesFilter>
      <ExpensesList items={filteredExpenses}></ExpensesList>
    </Card>
  );
};

export default Expenses;
