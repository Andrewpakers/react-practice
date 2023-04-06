import React, { Component } from 'react';

export default class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: [],
            isEditing: true,
            saveNew: 'Save',
            inputName: '',
            inputPosition: '',
            inputTasks: '',
            inputDateStarted: '',
            inputDateLeft: '',
            inputID: Math.random(),
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.RenderJobs = this.RenderJobs.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.RenderInput = this.RenderInput.bind(this);
    }
    handleEdit(name, position, dateStarted, dateLeft, tasks, id) {
        this.setState({
            inputName: name,
            inputPosition: position,
            inputTasks: tasks,
            inputDateStarted: dateStarted,
            inputDateLeft: dateLeft,
            inputID: id,
            isEditing: true,
            saveNew: 'Save',
        });
    }
    RenderJobs() {
        return (
            this.state.jobs.map((job) => {
                return (
                    <li key={job.id}>
                        <span className='jobItem jobName'>Company name: {job.name}</span>
                        <span className='jobItem jobPosition'>Position: {job.position}</span>
                        <span className='jobItem jobDateStarted'>Start date: {job.dateStarted}</span>
                        <span className='jobItem jobDateLeft'>Position: {job.dateLeft}</span>
                        <span className='jobItem jobTasks'>Tasks: {job.tasks}</span>
                        <button onClick={() => this.handleEdit(job.name, job.position, job.dateStarted, job.dateLeft, job.tasks, job.id)}>Edit</button>
                    </li>
                );
            })
        );
    }
    handleInput(evt){
        if (evt.target.id === 'jobNameInput') {
            this.setState({
                inputName: evt.target.value,
            });
        } else if (evt.target.id === 'jobPositionInput') {
            this.setState({
                inputPosition: evt.target.value,
            });
        } else if (evt.target.id === 'jobDateStartedInput') {
            this.setState({
                inputDateStarted: evt.target.value,
            });
        } else if (evt.target.id === 'jobDateLeftInput') {
            this.setState({
                inputDateLeft: evt.target.value,
            });
        } else if (evt.target.id === 'jobTasksInput') {
            this.setState({
                inputTasks: evt.target.value,
            });
        }
    }
    handleSubmit() {
        if (this.state.isEditing) {
            const newJob = {
                name: this.state.inputName,
                position: this.state.inputPosition,
                dateStarted: this.state.inputDate,
                dateLeft: this.state.inputDateLeft,
                tasks: this.state.inputTasks,
                id: this.state.inputID,
            }
            const newJobArray = this.state.jobs.filter((job) => {
                return job.id !== this.state.inputID;
            });
            newJobArray.push(newJob);
            this.setState({
                jobs: newJobArray,
                isEditing: false,
                saveNew: 'New',
                inputName: '',
                inputPosition: '',
                inputTasks: '',
                inputDateStarted: '',
                inputDateLeft: '',
                inputID: Math.random(),
            });
        } else {
            this.setState({
                isEditing: true,
                saveNew: 'Save',
            });
        }
        
    }
    RenderInput() {
        if (this.state.isEditing) {
            return (
                <form>
                    <label htmlFor='jobNameInput'>Company Name: </label>
                    <input name='jobName' id='jobNameInput' type='text' onChange={this.handleInput} value={this.state.inputName}></input>
                    <label htmlFor='jobPositionInput'>Position: </label>
                    <input name='jobPosition' id='jobPositionInput' type='text' onChange={this.handleInput} value={this.state.inputPosition}></input>
                    <label htmlFor='jobDateStartedInput'>Start date: </label>
                    <input name='jobDateStarted' id='jobDateStartedInput' type='date' onChange={this.handleInput} value={this.state.inputDateStarted}></input>
                    <label htmlFor='jobDateLeftInput'>Start date: </label>
                    <input name='jobDateLeft' id='jobDateLeftInput' type='date' onChange={this.handleInput} value={this.state.inputDateLeft}></input>
                    <label htmlFor='jobTasksInput'>Responsibilities: </label>
                    <input name='jobTasks' id='jobTasksInput' type='text' onChange={this.handleInput} value={this.state.inputTasks}></input>
                </form>
            );
        } else {
            return null;
        }
    }
    render() {
        return (
            <div>
                <this.RenderInput />
                <button onClick={this.handleSubmit}>{this.state.saveNew}</button>
                <ol>
                    <this.RenderJobs />
                </ol>
            </div>
        );
    }
}