import React, {useState} from "react";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";





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

    const filteredExpenses = props.expenses.filter((expense)=> { return expense.date.getFullYear()==filterDate.getFullYear()});


    return (
        <div>
            <ExpensesFilter onExpensesFilter={saveExpenseFilterHandler}/>
            <ExpensesList filteredExpenses={filteredExpenses}/>
        </div>
    );
}
export default Expenses;