import './ShowExpenses.css';

const ExpenseItem = (props) => {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();


    return (
        <div className="expense-item">
            <div className="expense-date">
                <div className="expense-date__month">{month}</div>
                <div className="expense-date__year">{year}</div>
                <div className="expense-date__day">{day}</div>
            </div>
            <div className="expense-item__description">
                <h1>{props.title}</h1> 
                <div className="expense-item__price">{props.price}</div>
            </div>
        </div>
    )
    
    
    
}

export default ExpenseItem;