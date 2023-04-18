import React, { useState } from "react";
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDetailsChange = (event) => {
    setDetails(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: todoList.length + 1,
      title: title,
      details: details,
      dueDate: dueDate,
    };
    setTodoList([...todoList, newTodo]);
    setTitle("");
    setDetails("");
    setDueDate("");
  };

  const handleDelete = (id) => {
    const updatedList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedList);
  };

  const handleEdit = (id) => {
    const todoToUpdate = todoList.find((todo) => todo.id === id);
    setTitle(todoToUpdate.title);
    setDetails(todoToUpdate.details);
    setDueDate(todoToUpdate.dueDate);
    handleDelete(id);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredList = todoList.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="body">
      <h1 className="Header">TODO List</h1>
      <form className="inp-fields" onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} placeholder="Enter Title For TODO" onChange={handleTitleChange} />
        </label>
        <label className="space">
          Details:
          <input  type="text" value={details} placeholder="A little details" onChange={handleDetailsChange} />
        </label>
        <label className="space">
          Due Date:
          <input  type="date" value={dueDate} onChange={handleDueDateChange} />
        </label>
        <button id="btn-add" type="submit">Add</button>
      </form>
      <br />
      <label className="search">
        Search:
        <input  type="text" value={searchTerm} placeholder="Search Your TODOS" onChange={handleSearchTermChange} />
      </label>
      
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Details</th>
            <th>Due Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>{todo.details}</td>
              <td>{todo.dueDate}</td>
              <td>
                <button id="btn-ed-del" onClick={() => handleEdit(todo.id)}>Edit</button>
                <button id="btn-ed-del" onClick={() => handleDelete(todo.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;