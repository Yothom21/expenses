import React, {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

interface ExpenseItem {
    title: string;
    amount: number;
    date: Date;
}


const ExpenseItem: React.FC<ExpenseItem> = (props: ExpenseItem) => {
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated!');
    };

    return (
        <li>
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
        </li>
    );
}


export default ExpenseItem;