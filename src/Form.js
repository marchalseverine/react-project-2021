import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";

export default function Forms() {
  let [date, setDate] = useState();
  let [description, setDescription] = useState();
  let [price, setPrice] = useState();

  function handleSubmit(event) {
    event.preventDefault();
  }
  function updateDate(event) {
    event.preventDefault();
    setDate(event.target.value);
  }
  function updateDescription(event) {
    event.preventDefault();
    setDescription(event.target.value);
  }
  function updatePrice(event) {
    event.preventDefault();
    setPrice(event.target.value);
  }

  return (
    <div className="forms" onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input
          type="text"
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
        <span className="input-group-text">Price</span>
        <input
          type="text"
          onChange={updatePrice}
          className="form-control"
          placeholder="€"
          aria-label="What expense"
        />
        <input type="submit" value="submit" />
      </div>
      <ExpenseItem date={date} description={description} price={price} />
      <ExpenseItem date={date} description={description} price={price} />
      <ExpenseItem date={date} description={description} price={price} />
      <ExpenseItem date={date} description={description} price={price} />
    </div>
  );
}
