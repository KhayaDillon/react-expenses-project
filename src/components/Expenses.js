import ExpenseItem from './ExpenseItem'

const Expenses = (props) => {
    return (
        <div className="expenses"> 
            <ExpenseItem title={props.expenses[0].title} date={props.expenses[0].date} price={props.expenses[0].amount} />
            <ExpenseItem title={props.expenses[1].title} date={props.expenses[1].date} price={props.expenses[1].amount} />
            <ExpenseItem title={props.expenses[2].title} date={props.expenses[2].date} price={props.expenses[2].amount} />
        </div>
      );

}

export default Expenses;