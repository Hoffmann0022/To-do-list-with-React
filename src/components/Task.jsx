import { useContext } from "react"
import TaskContext from "../contexts/TaskContext"


export function Task(title, text) {

    return (
        <div className="task">
            <input type="checkbox" name="checkbox" id="checkbox"  />

            <div className="info">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}