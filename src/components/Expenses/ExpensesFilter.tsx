import React, {useState, useEffect} from 'react';

import './ExpensesFilter.css';


interface ExpenseFilterProps {
    onExpensesFilter:any;
}

const ExpensesFilter: React.FC<ExpenseFilterProps> = (props:ExpenseFilterProps) => {

    const[selectedDate, setSelectedDate] = useState('');

    useEffect(() => {
        props.onExpensesFilter(selectedDate)
    }, [selectedDate]);

    const selectedDateHandler = (event:any) => {
      setSelectedDate(event.target.value);
    };


    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={selectedDateHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;