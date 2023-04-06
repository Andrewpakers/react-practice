import React, { Component } from 'react';

export default class Education extends Component {
    constructor(props) {
        super(props);

        this.state = {
            schools: [],
            isEditing: true,
            saveNew: 'Save',
            inputName: '',
            inputDegree: '',
            inputDate: '',
            inputID: Math.random(),
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.RenderSchools = this.RenderSchools.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.RenderInput = this.RenderInput.bind(this);
    }
    handleEdit(name, degree, date, id) {
        this.setState({
            inputName: name,
            inputDegree: degree,
            inputDate: date,
            inputID: id,
            isEditing: true,
            saveNew: 'Save',
        });
    }
    RenderSchools() {
        return (
            this.state.schools.map((school) => {
                return (
                    <li key={school.id}>
                        <span className='schoolItem schoolName'>Name: {school.name}</span>
                        <span className='schoolItem schoolDegree'>Degree: {school.degree}</span>
                        <span className='schoolItem schoolDate'>Gradutation Date: {school.date}</span>
                        <button onClick={() => this.handleEdit(school.name, school.degree, school.date, school.id)}>Edit</button>
                    </li>
                );
            })
        );
    }
    handleInput(evt){
        if (evt.target.id === 'schoolNameInput') {
            this.setState({
                inputName: evt.target.value,
            });
        } else if (evt.target.id === 'schoolDegreeInput') {
            this.setState({
                inputDegree: evt.target.value,
            });
        } else if (evt.target.id === 'schoolDateInput') {
            this.setState({
                inputDate: evt.target.value,
            });
        }
    }
    handleSubmit() {
        if (this.state.isEditing) {
            const newSchool = {
                name: this.state.inputName,
                degree: this.state.inputDegree,
                date: this.state.inputDate,
                id: this.state.inputID,
            }
            const newSchoolArray = this.state.schools.filter((school) => {
                return school.id !== this.state.inputID;
            });
            newSchoolArray.push(newSchool);
            this.setState({
                schools: newSchoolArray,
                isEditing: false,
                saveNew: 'New',
                inputName: '',
                inputDegree: '',
                inputDate: '',
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
                    <label htmlFor='schoolNameInput'>School Name: </label>
                    <input name='schoolName' id='schoolNameInput' type='text' onChange={this.handleInput} value={this.state.inputName}></input>
                    <label htmlFor='schoolDegreeInput'>Degree: </label>
                    <input name='schoolDegree' id='schoolDegreeInput' type='text' onChange={this.handleInput} value={this.state.inputDegree}></input>
                    <label htmlFor='schoolDateInput'>Graduation Date: </label>
                    <input name='schoolDate' id='schoolDateInput' type='date' onChange={this.handleInput} value={this.state.inputDate}></input>
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
                    <this.RenderSchools />
                </ol>
            </div>
        );
    }
}