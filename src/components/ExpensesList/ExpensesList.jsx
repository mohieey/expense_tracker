import React, { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

import "./ExpensesList.css";
import Expenses from "./../Expenses/Expenses";

const ExpensesList = ({ items }) => {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpensesList;
