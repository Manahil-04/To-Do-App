import React from "react";
import { useState, useEffect } from "react";
import '../App.css';
import Button from '../elements/button.jsx';
import Input from "./input.jsx";
import TaskList from "./taskList.jsx";
import '@fortawesome/fontawesome-free/css/all.min.css';


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

    const handleChange = (event) => {
        setTask(event.target.value);
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
                <Input 
                    inputValue={task}
                    handleChange={handleChange}
                    placeholder="Add a task"
                    styleclass="input-field"/>
                
                <Button type="button" onClick={addTask} text = "Add" />
            </div>

            <TaskList
            tasks = {tasks}
            toggleComplete = {toggleComplete}
            deleteTask = {deleteTask} />
        </div>
    );
}

export default ToDo;