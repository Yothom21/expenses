import React from 'react';
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

interface ExpensesListProps {
    filteredExpenses: {
        id: string;
        title: string;
        amount: number;
        date: Date;
    }[];
}

const ExpensesList:React.FC<ExpensesListProps> = (props:ExpensesListProps) => {

    if(props.filteredExpenses.length === 0) {
        return (<h2 className="expenses-list__fallback">Found no expenses</h2>)
    }

    return (
        <ul className="expenses-list">
            {props.filteredExpenses.map((expense) => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>))}
        </ul>
    );
};


export default ExpensesList