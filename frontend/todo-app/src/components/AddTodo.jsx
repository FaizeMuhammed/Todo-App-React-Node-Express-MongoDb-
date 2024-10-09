import React, { useState } from "react";
import axios from "axios";

const AddTodo = ({ fetchTodos }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (title.trim() === '') return;

        try {
            await axios.post('http://localhost:5000/todos', { title });
            setTitle('');
            fetchTodos();
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add new todo"
            />
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default AddTodo;