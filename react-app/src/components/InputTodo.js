import React, {  useState } from "react";
import axios from 'axios';

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };

      const response = await axios.post("http://localhost:5001/todos", body, {
        headers: { "Content-Type": "application/json" }
      });
      
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
      <input
  type="text"
  className="form-control"
  value={description}
  onChange={e => {
    const value = e.target.value;
    if (/^[a-zA-Z]*$/.test(value)) {
      setDescription(value);
    }
    else{
      alert('Only Alphabets are allowed')
    }
  }}
/>
        <button className="btn btn-success" type="submit">Add</button>
      </form>
    </>
  );
};

export default InputTodo;
