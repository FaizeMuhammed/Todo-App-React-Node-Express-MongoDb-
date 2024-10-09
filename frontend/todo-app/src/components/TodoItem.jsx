import React from 'react';
import axios from 'axios';
import "./TodoItem.css"

const TodoItem = ({ todo, fetchTodos }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/todos/${todo._id}`);
      fetchTodos();
    } catch (error) {
      console.log('Error deleting todo:', error);
    }
  };

  const handleComplete = async () => {
    try {
        await axios.patch(`http://localhost:5000/todos/${todo._id}/complete`); 
        fetchTodos(); 
      } catch (error) {
        console.log('Error marking todo complete:', error);
      }
      
  };

  return (
    <li className='list_tag'>
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.title}
      </span>
      <button onClick={handleDelete}>Delete</button>
      {!todo.completed && <button  onClick={handleComplete}>Complete</button>}
    </li>
  );
};

export default TodoItem;
