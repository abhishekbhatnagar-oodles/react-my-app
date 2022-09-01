// import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.css";
import Card from "../UI/Card";

function ExpenseItems(prop) {
    // const [title, setTitle] = useState(prop.title);

    // let title = prop.title;
    // const clickhandler = () => {
    //     setTitle('Updated');
    //     console.log(title);
    // }

    return (
        <Card className="expense-item">
            {/* <h1>This is my First component</h1> */}
            <ExpenseDate date={prop.date} />
            <div className="expense-item__description">
                <h2>{prop.title}</h2>
                <div className="expense-item__price">{prop.amount}</div>
            </div>
            {/* <button onClick={clickhandler}>Click here</button> */}
        </Card>
    );
}

export default ExpenseItems;
