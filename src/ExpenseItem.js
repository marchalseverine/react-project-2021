import React from "react";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  return (
    <div>
      <div className="container expense-item">
        <div className="row">
          <div className="col-sm-3">
            <span className="expense-item-date">{props.date}</span>
          </div>
          <div className="col-sm-6">
            <h5 className="expense-item-description">{props.description}</h5>
          </div>
          <div className="col-sm-3">
            <span className="expense-item-price">{props.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
