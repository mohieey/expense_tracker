import React, { useState } from "react";

import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onAddExpense(expenseData);
  };

  const showExpenseFormToggleHandler = () => {
    setShowExpenseForm((prev) => !prev);
  };

  return (
    <div className="new-expense">
      {showExpenseForm && (
        <ExpenseForm
          onCancel={showExpenseFormToggleHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        ></ExpenseForm>
      )}
      {!showExpenseForm && (
        <button onClick={showExpenseFormToggleHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
