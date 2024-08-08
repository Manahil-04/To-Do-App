import React from "react";
import { useState, useEffect } from "react";
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Button = ({ addTask }) => {
    return (
        <button className="button" onClick={addTask}>
            Add
        </button>
    );
};

function ToDo() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(storedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleChange = (Event) => {
        setTask(Event.target.value);
    };

    const addTask = () => {
        if (task.trim() !== '') {
            setTasks([...tasks, { text: task, completed: false }]);
            setTask('');
        }
    };

    const toggleComplete = (index) => {
        const updatedTasks = tasks.map((task, i) => {
            if (i === index) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="App">
            <div className="input-container">
                <input
                    value={task}
                    onChange={handleChange}
                    placeholder="Add a task"
                    className="input-field"
                />
                <Button addTask={addTask} />
            </div>
            <ul className="task-list">
                {tasks.map((task, index) => (
                    <li
                        key={index}
                        className={`task-item ${task.completed ? 'completed' : ''}`}
                    >
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleComplete(index)}
                            className="task-checkbox"
                        />
                        <span className="task-text">{task.text}</span>
                        <button
                            onClick={() => deleteTask(index)}
                            className="delete-button"
                        >
                            <i className="fas fa-times"></i>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDo;