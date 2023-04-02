import React, {useState} from "react";


import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";


const ExpenseItem = (props) => {
  
  const [title,setTitle] = useState(props.title);
  const [amount,setAmount] = useState(props.amount);


  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
