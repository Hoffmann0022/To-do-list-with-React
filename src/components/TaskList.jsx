import { useTodo } from '../contexts/TodoContext'
import '../css/TaskList.css'
import { NoTask } from './noTask'

export function TaskList({ }) {
    const { tasks, openPopUp, removeTask, TaskChecked } = useTodo()

    if (tasks.length === 0) {
        return <NoTask />
    }

    return (
        <>
            <ul>
                {tasks.map(task => (
                    <li className="task" key={task.id}>
                        <input type="checkbox" name="checkbox" id="checkbox" checked={task.isChecked} onChange={() => TaskChecked(task.id)} />

                        <div className="info">
                            <h2>{task.title}</h2>
                            <p>{task.text}</p>
                        </div>

                        <i class="bi bi-trash" onClick={() => removeTask(task.id)}></i>

                    </li>))}
            </ul>

            <div className="btn">
                <input className='button' type="button" value='Adicionar Tarefa' onClick={openPopUp} />
            </div>
        </>


    )
}