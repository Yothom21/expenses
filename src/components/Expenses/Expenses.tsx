import ExpenseItem from "./ExpenseItem";
import React from "react";
import './Expenses.css';

interface ExpensesProps {
    expenses: {
        id: string;
        title: string;
        amount: number;
        date: Date;
    }[];
}



const Expenses: React.FC<ExpensesProps> = (props:ExpensesProps) => {
    return (
        <div>
        {props.expenses.map((expense) =>  (
            <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>
            ))}
        </div>
    );
}

export default Expenses;