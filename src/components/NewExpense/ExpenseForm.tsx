import React, {useState} from 'react';
import './ExpenseForm.css';

interface NewExpenseProps {
    onSaveExpenseData: any;
}

const ExpenseForm:React.FC<NewExpenseProps> = (props:NewExpenseProps) => {

    const [enteredTitle,setEnteredTitle] = useState('');

    const[enteredAmount, setEnteredAmount] = useState('');

    const [enteredDate, setEnteredDate] = useState('');

    const[addNewExpenseClicked, setAddNewExpenseClicked] = useState(false);

    const titleChangeHandler = (event:any) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event:any) => {
        setEnteredAmount(event.target.value)
    };

    const dateChangeHandler = (event:any) => {
      setEnteredDate(event.target.value);
    };

    const submitHandler = (event:any) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    const addnewExpenseHandler = () => {
        setAddNewExpenseClicked(prevState => !prevState);
        console.log(addNewExpenseClicked);
    };
    if(!addNewExpenseClicked) {
        return(
            <div className="new-expense__actions">
                <button type='submit' onClick={addnewExpenseHandler}>Add New Expense</button>
            </div>
        );
    }

    return (
      <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
              <div className="new-expense__control">
                  <label>Title</label>
                  <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
              </div>
              <div className="new-expense__control">
                  <label>Amount</label>
                  <input type='number' value={enteredAmount} min="0.01" step="0.01"  onChange={amountChangeHandler}/>
              </div>
              <div className="new-expense__control">
                  <label>Date</label>
                  <input type='date' value={enteredDate} min="2021-01-01" max="2022-12-31" onChange={dateChangeHandler}/>
              </div>
          </div>
          <button type='submit' onClick={addnewExpenseHandler}>Cancel</button>
          <button type='submit'>Add Expense</button>
      </form>
    );
}

export default  ExpenseForm;