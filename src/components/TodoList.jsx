import Style from './TodoList.module.css';
import { CalendarioSVG, RelogioSVG } from './svgList';

export default function Todolist({tarefas, setTodoList}) {
    const sortedList = tarefas.slice()
        .sort((a, b) => Number(a.done) - Number(b.done) );

    function deletarTask(todo) {
        const taskList = tarefas.filter(item => item.hash !== todo.hash);
        setTodoList(taskList);

        let encoded = JSON.stringify(taskList)
        localStorage.setItem('TaskKeys', btoa(encoded) );
    }

    function changeStatus(todo) {
        let taskClicked = ({hash: todo.hash, value: todo.value, date: todo.date, time: todo.time, done: !todo.done})
        const taskList = tarefas.map( (item) => item.hash == todo.hash? item = taskClicked : item = item )
        setTodoList(taskList)

        let encoded = JSON.stringify(taskList)
        localStorage.setItem('TaskKeys', btoa(encoded) );
    }
    
    return (
        <ul className={Style.todoList}>
            {sortedList.map((item) => (
                <li className={item.done ? Style.completed : ''} key={item.hash}>
                    <div className={Style.content} onClick={() => changeStatus(item)}>
                        <span>{item.value}</span>
                        <div>
                            <div>
                                <CalendarioSVG /> {item.date}
                            </div>
                            <div>
                                <RelogioSVG /> {item.time}
                            </div>
                        </div>
                    </div>
                    <button onClick={() => deletarTask(item)}>x</button>
                </li>
            ))}
        </ul>
    )
}