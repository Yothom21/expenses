import ExpenseItem from "./ExpenseItem";
import React, {useState} from "react";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";

interface ExpensesProps {
    expenses: {
        id: string;
        title: string;
        amount: number;
        date: Date;
    }[];
}




const Expenses: React.FC<ExpensesProps> = (props:ExpensesProps) => {
    const [filterDate, setFilterDate] = useState(new Date());

    const saveExpenseFilterHandler = (filteredDate:string) => {
        setFilterDate(new Date(filteredDate));
    };

    return (
        <div>
            <ExpensesFilter onExpensesFilter={saveExpenseFilterHandler}/>
            {props.expenses.filter((expense)=> (expense.date.getFullYear()==filterDate.getFullYear())).map((expense) =>  (
                <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>
            ))}
        </div>
    );
}
export default Expenses;