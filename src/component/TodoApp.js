import React, { useState } from "react";
import '../App.css'; // Use the combined CSS file

function TodoApp() {
  const [task, setTask] = useState(""); // To handle the input task
  const [todos, setTodos] = useState([]); // To store the list of tasks

  const addTodo = () => {
    if (!task.trim()) return; // Prevent adding empty tasks
    setTodos([...todos, { text: task, isCompleted: false }]); // Add task with initial completion state
    setTask(""); // Clear the input after adding
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index)); // Remove the task at the specified index
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isCompleted = !updatedTodos[index].isCompleted; // Toggle the completion status
    setTodos(updatedTodos); // Update the todo list with the new completion status
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>

      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTodo}>Add Task</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={todo.isCompleted ? "completed" : ""}>
            <span>{todo.text}</span>

            <div className="todo-actions">
              <button onClick={() => toggleComplete(index)}>
                {todo.isCompleted ? "Undo" : "Complete"}
              </button>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
