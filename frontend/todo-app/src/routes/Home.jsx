import React,{useState,useEffect} from "react";
import axios from "axios";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import LiveClock from "../components/LiveClock";
import './Home.css';

const Home =()=>{

    const [todos,setTodos]=useState([]);
    const fetchTodos=async()=>{
        try{
            const response=await axios.get('http://localhost:5000/todos/');
            setTodos(response.data);
        }
        catch(err){
            console.error('Error fetching todos:', err);
        }
    }

    useEffect(()=>{
        fetchTodos();
    },[])
    return(
        <div className="App">
            <LiveClock/>
            <h1>Todo List</h1>
            <AddTodo fetchTodos={fetchTodos}/>
            <TodoList todos={todos} fetchTodos={fetchTodos}/>
        </div>


    )
}
export default Home;