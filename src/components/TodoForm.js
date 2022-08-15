import React from "react";

const TodoForm = ({ handleSubmit, todo, editId, setTodo }) => {
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="btn-2" type="submit"> {editId ? "Edit" : "Add Todo"}</button>
    </form>
  );
};

export default TodoForm;
