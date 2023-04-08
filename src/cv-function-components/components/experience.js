import { useState } from 'react';

function RenderJobs({ jobs, handleEdit }) {
    return (
        jobs.map((job) => {
            return (
                <li key={job.id}>
                    <span className='jobItem jobName'>Company name: {job.name}</span>
                    <span className='jobItem jobPosition'>Position: {job.position}</span>
                    <span className='jobItem jobDateStarted'>Start date: {job.dateStarted}</span>
                    <span className='jobItem jobDateLeft'>Position: {job.dateLeft}</span>
                    <span className='jobItem jobTasks'>Tasks: {job.tasks}</span>
                    <button onClick={() => handleEdit(job.name, job.position, job.dateStarted, job.dateLeft, job.tasks, job.id)}>Edit</button>
                </li>
            );
        })
    );
}
function RenderInput({ isEditing, handleInput, handleSubmit, inputName, inputPosition, inputDateStarted, inputDateLeft, inputTasks, saveNew }) {
    if (isEditing) {
        return (
            <div>
                <form>
                    <label htmlFor='jobNameInput'>Company Name: </label>
                    <input name='jobName' id='jobNameInput' type='text' onChange={handleInput} value={inputName}></input>
                    <label htmlFor='jobPositionInput'>Position: </label>
                    <input name='jobPosition' id='jobPositionInput' type='text' onChange={handleInput} value={inputPosition}></input>
                    <label htmlFor='jobDateStartedInput'>Start date: </label>
                    <input name='jobDateStarted' id='jobDateStartedInput' type='date' onChange={handleInput} value={inputDateStarted}></input>
                    <label htmlFor='jobDateLeftInput'>Start date: </label>
                    <input name='jobDateLeft' id='jobDateLeftInput' type='date' onChange={handleInput} value={inputDateLeft}></input>
                    <label htmlFor='jobTasksInput'>Responsibilities: </label>
                    <input name='jobTasks' id='jobTasksInput' type='text' onChange={handleInput} value={inputTasks}></input>
                </form>
                <button onClick={handleSubmit}>{saveNew}</button>
            </div>
        );
    } else {
        return (
            <button onClick={handleSubmit}>{saveNew}</button>
        );
    }
}

export default function Experience() {
    const [jobs, setJobs] = useState([]);
    const [isEditing, setIsEditing] = useState(true);
    const [saveNew, setSaveNew] = useState('Save');
    const [inputName, setInputName] = useState('');
    const [inputPosition, setInputPosition] = useState('');
    const [inputTasks, setInputTasks] = useState('');
    const [inputDateStarted, setInputDateStarted] = useState('');
    const [inputDateLeft, setInputDateLeft] = useState('');
    const [inputID, setInputID] = useState(Math.random());

    function handleEdit(name, position, dateStarted, dateLeft, tasks, id) {
        setInputName(name);
        setInputPosition(position);
        setInputTasks(tasks);
        setInputDateStarted(dateStarted);
        setInputDateLeft(dateLeft);
        setInputID(id);
        setIsEditing(true);
        setSaveNew('Save');
    }
    function handleInput(evt){
        if (evt.target.id === 'jobNameInput') {
            setInputName(evt.target.value);
        } else if (evt.target.id === 'jobPositionInput') {
            setInputPosition(evt.target.value);
        } else if (evt.target.id === 'jobDateStartedInput') {
            setInputDateStarted(evt.target.value);
        } else if (evt.target.id === 'jobDateLeftInput') {
            setInputDateLeft(evt.target.value);
        } else if (evt.target.id === 'jobTasksInput') {
            setInputTasks(evt.target.value);
        }
    }
    function handleSubmit() {
        if (isEditing) {
            const newJob = {
                name: inputName,
                position: inputPosition,
                dateStarted: inputDateStarted,
                dateLeft: inputDateLeft,
                tasks: inputTasks,
                id: inputID,
            }
            const newJobArray = jobs.filter((job) => {
                return job.id !== inputID;
            });
            newJobArray.push(newJob);
            setJobs(newJobArray);
            setIsEditing(false);
            setSaveNew('New');
            setInputName('');
            setInputPosition('');
            setInputTasks('');
            setInputDateStarted('');
            setInputDateLeft('');
            setInputID(Math.random());
        } else {
            setIsEditing(true);
            setSaveNew('Save');
        }
        
    }

    return (
        <div>
            <RenderInput isEditing={isEditing} handleInput={handleInput} handleSubmit={handleSubmit}
            inputName={inputName} inputPosition={inputPosition} inputDateStarted={inputDateStarted}
            inputDateLeft={inputDateLeft} inputTasks={inputTasks} saveNew={saveNew}/>
            <ol>
                <RenderJobs jobs={jobs} handleEdit={handleEdit}/>
            </ol>
        </div>
    );

}