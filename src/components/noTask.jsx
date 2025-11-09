import { useTodo } from '../contexts/TodoContext'
import '../css/noTask.css'


export function NoTask() {
    const { openPopUp, tasks } = useTodo();

    if (tasks.length > 0) return null;

    return (
        <div className="noTask">
            <div className="img">
                <img src="./Checklist-rafiki.png" alt="Foto sem tarefas" />
            </div>
            <div className="info">
                <p>Você não tem tarefas, adicione</p>
            </div>

            <div className="btn">
                <input className='button' type="button" value='Adicionar Tarefa' onClick={openPopUp} />
            </div>
        </div>
    )
}