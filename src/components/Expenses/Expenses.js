import ExpenseItems from "./ExpenseItems";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";


function Expenses(prop) {
    const [filteredYear, setFilteredYear] = useState('2019')
    const filterChangeHandler = (selectedYear) => {
        // console.log('in expenses.js');
        setFilteredYear(selectedYear);
    }
    const filteredExpense = prop.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {filteredExpense.length === 0 && <p>No Expense Found for this Year</p>}
            {filteredExpense.length > 0 &&
                filteredExpense.map((expense) => (
                    <ExpenseItems
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))
            }

        </div>
    )
}

export default Expenses