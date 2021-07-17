import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import './ShowExpenses.css';

const Expenses = (props) => {
  
  const [year, setYear] = useState("")

  const saveSelectedYearHandler = event => {
    setYear(event.target.value)
  }

  const filteredExpenses = props.expenses.filter(item => item.date.getFullYear().toString() === year)
  const presentedExpenses = filteredExpenses.length === 0 ? props.expenses : filteredExpenses
  
return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={year} onYearSelecthandler={saveSelectedYearHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        {presentedExpenses.map(item => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />)}
      </Card>
    </div>
  );
};

export default Expenses;