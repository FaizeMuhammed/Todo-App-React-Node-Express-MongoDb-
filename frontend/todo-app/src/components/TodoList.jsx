import React from "react";
import TodoItem from "./TodoItem";
import './TodoItem.css'

const TodoList=({ todos, fetchTodos })=>{


    return(
        <ul className="list_ul">
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} fetchTodos={fetchTodos} />
        ))}
      </ul>
    )
}
export default TodoList;