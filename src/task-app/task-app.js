import { useState } from 'react';
import Overview from "./components/overview";
import TaskInput from './components/input';
import './styles/task-app.css'

export default function TaskApp() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [taskID, setTaskID] = useState(null);

    function handleTask(description) {
        let id;
        if (taskID === null) {
            id = Math.random() * 1000;
        } else {
            id = taskID;
        }
        const taskObj = {
            ID: id,
            description: description,
        }
        const newTasks = tasks.filter((task) => {
            return task.ID !== id;
        })
        newTasks.push(taskObj);
        setTasks(newTasks);
        setTaskID(null);
    }
    function editTask(description, id) {
        setTaskID(id);
        setInputValue(description);
    }
    function deleteTask(evt) {
        const newTasks = tasks.filter((task) => {
            return task.ID !== taskID;
        })
        setTasks(newTasks);
        setTaskID(null);
    }
    return (
        <div className="contentContainer">
            <div className="inputContainer container">
                <TaskInput inputValue={inputValue} setInputValue={setInputValue}
                handleSubmit={handleTask} taskID={taskID} deleteTask={deleteTask}/>
            </div>
            <div className="overviewContainer container">
                <Overview taskArray={tasks} editTask={editTask}/>
            </div>
        </div>
    );
}