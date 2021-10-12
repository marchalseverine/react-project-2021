import React, { useState } from "react";

////// TEST ///// NO VISIBLE
///// WANT TO CREATE AN ARRAY OF OBJECT FROM THE VALUE OF THE INPUT
///// LOOP THROUGH IT AN DISPLAY ON THE PAGE

export default function Formstwo(props) {
  let [item, setItem] = useState({});

  const createObject = (event) => {
    event.preventDefault();
    let value = { expense: event.target.value };
    setItem(value);
    console.log(item.expense);
  };

  return (
    <div className="forms mt-5 mx-5" onSubmit={(event) => createObject(event)}>
      <div className="input-group mb-3">
        <input
          type="date"
          value={item.expense}
          className="form-control"
          placeholder="date"
          aria-label="date"
        />
      </div>
    </div>
  );
}
