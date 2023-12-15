import { useState } from "react";
import styles from './TodoForms.module.css'

export default function TodoForms({todoList, setTodoList}) {
    // Use State Todo 
    const [todo, setTodo] = useState({value: ''});

    function obterData(key) {
        const data = new Date();
        const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const formatoHora = new Intl.DateTimeFormat('pt-BR', options);
    
        switch (key) {
            case 'hora':
                return formatoHora.format(data);
            default:
                return data.toLocaleDateString('pt-BR');
        }
    }
      

    function handleTodo(e) {
        e.preventDefault();
        if (todo.value.length === 0 || todo.value === '') { return }

        setTodoList([...todoList, todo])
        setTodo({value: ''})

        let encoded = JSON.stringify([...todoList, todo])
        localStorage.setItem('TaskKeys', btoa(encoded) );
    }

    return(
        <form className={styles.todoForm}>
            <fieldset>
                <input maxLength={178} onChange={ (e) => setTodo({hash: crypto.randomUUID(),value: e.target.value, date: obterData('dia'), time: obterData('hora'), done: false}) } type="text" value={todo.value} placeholder="Adicione uma Tarefa" />
                <button onClick={ (e) => handleTodo(e)} type="submit">+</button>
            </fieldset>
        </form>
    )
}