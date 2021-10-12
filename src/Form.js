import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";

export default function Forms() {
  let [date, setDate] = useState();
  let [description, setDescription] = useState();
  let [price, setPrice] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const updateDate = (event) => {
    event.preventDefault();
    setDate(event.target.value);
  };
  const updateDescription = (event) => {
    event.preventDefault();
    setDescription(event.target.value);
  };
  const updatePrice = (event) => {
    event.preventDefault();
    setPrice(event.target.value);
  };

  return (
    <div className="forms mt-5 mx-5" onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="date"
          onChange={updateDate}
          className="form-control"
          placeholder="date"
          aria-label="date"
        />
        <span className="input-group-text">Description</span>
        <input
          type="text"
          onChange={updateDescription}
          className="form-control"
          placeholder="What Expense?"
          aria-label="What expense"
        />
        <span className="input-group-text">€</span>
        <input
          type="text"
          onChange={updatePrice}
          className="form-control"
          placeholder="Price"
          aria-label="What expense"
        />
        <input type="submit" value="submit" />
      </div>
      <ExpenseItem date={date} description={description} price={price} />
    </div>
  );
}
