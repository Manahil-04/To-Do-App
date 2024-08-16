import React from "react";
import Button from "../../elements/button/index.jsx";
import './taskList.css';


const TaskList = ({tasks, toggleComplete, deleteTask}) => {
    return (
        <ul className="task-list">
        {tasks.map((task, index) => (
            <li
                key={index}
                className={`task-item ${task.completed ? 'completed' : ''}`}>

                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(index)}
                    className="task-checkbox"
                />
                
                <span className="task-text">{task.text}</span>

                <Button type="delete-button" onClick={() => {deleteTask(index)}}
                icon = "fas fa-times" />
            </li>
        ))}
        </ul>
    )
}

export default TaskList;
