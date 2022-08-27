import ExpenseItems from "./ExpenseItems";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";


function Expenses(prop) {
    const filterChangeHandler = (selectedYear) => {
        console.log('in expenses.js');
        console.log(selectedYear);
    }

    return (
        <div className="expenses">
            <ExpensesFilter onChangeFilter={filterChangeHandler} />
            <ExpenseItems
                title={prop.items[0].title}
                amount={prop.items[0].amount}
                date={prop.items[0].date}
            />
            <ExpenseItems
                title={prop.items[1].title}
                amount={prop.items[1].amount}
                date={prop.items[1].date}
            />
            <ExpenseItems
                title={prop.items[2].title}
                amount={prop.items[2].amount}
                date={prop.items[2].date}
            />
            <ExpenseItems
                title={prop.items[3].title}
                amount={prop.items[3].amount}
                date={prop.items[3].date}
            />
        </div>
    );
}

export default Expenses