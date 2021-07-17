import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);

    setRenderedForm(<button type="button" onClick={AddExpenseHandler}>Add New Expense</button>)
  };

  const cancelExpenseFormHandler = event => {
    setRenderedForm(<button type="button" onClick={AddExpenseHandler}>Add New Expense</button>)
  }

  const AddExpenseHandler = event => {
    setRenderedForm(<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelExpenseForm={cancelExpenseFormHandler} />)
  };

  const [renderedForm, setRenderedForm] = useState(<button type="button" onClick={AddExpenseHandler}>Add New Expense</button>)
  //The better solution would have been to have created a toggleOpenForm function and to have a conditional in the html section

  return (
    <div className='new-expense'>
      {renderedForm}
    </div>
  );
};

export default NewExpense;