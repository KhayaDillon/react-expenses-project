import React, {useState} from 'react'

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/ShowExpenses/Expenses'

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 2, title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 3,
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 4,
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = newExpense => {
    setExpenses( prevState => {
      newExpense.id = expenses[expenses.length - 1].id + 1
      return [newExpense, ...prevState]
    })   
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
