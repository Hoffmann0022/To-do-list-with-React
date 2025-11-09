import { useState } from 'react';
import { useTodo } from '../contexts/TodoContext'

import '../css/Pop-up.css'

export function PopUp() {
    const {isOpenPopUp, closePopUp, addTask } = useTodo();
    const [title, setTitle] = useState('');
    const [text, setText ]= useState('');

    if (!isOpenPopUp) return null
    
    const newTask = () =>{
        if (title === ''){
            return
        } else {
            addTask(title, text)
        }
    }

    const clearFields = () =>{
        setTitle('')
        setText('')
    }

    return (
        <div className="conteiner">
            <div className="overlay">
                <div className="popUp">
                    <i class="bi bi-x-lg" onClick={closePopUp}></i>
                    <div className="texts">
                        <input type="text" name="title" id="title" placeholder="Digite sua tarefa" value={title} onChange={(e) => setTitle(e.target.value)}/>

                        <textarea type="text" name="description" id="description" placeholder="Descreva sua tarefa" value={text} onChange={(e) => setText(e.target.value)}/>
                    </div>

                    <div className="btn">
                        <input className='button' type="button" value="Adicionar" onClick={() => {
                            newTask();
                            closePopUp();
                            clearFields();
                        }}/>
                    </div>
                </div>
            </div>
        </div>
    )
}