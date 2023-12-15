import { useState, useEffect } from "react";
import TodoForms from "./TodoForms";
import Todolist from "./TodoList";
import Style from "./Todo.module.css";

export default function Todo() {
    const [todoList, setTodoList] = useState([]);

    useEffect( () => {
        const storageList = localStorage.getItem('TaskKeys');
        if (storageList) { let decoded = atob(storageList)
            setTodoList( JSON.parse(decoded) ) 
        }
    }, [])

    return(
        <div className={Style.formContainer}>
            <TodoForms  todoList={todoList} setTodoList={setTodoList} />
            <Todolist tarefas={todoList} setTodoList={setTodoList} />
        </div>
    );
}