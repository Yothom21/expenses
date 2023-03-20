import React from 'react';
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

interface AppProps {
    onAddExpense: any;
}

const NewExpense:React.FC<AppProps> = (props:AppProps) => {

    const saveExpenseDataHandler = (enteredExpenseData:any) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    return (
      <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      </div>
    );
};

export default NewExpense;