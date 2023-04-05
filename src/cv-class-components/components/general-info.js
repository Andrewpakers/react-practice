import React, { Component } from 'react';

export default class GeneralInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: '',
            isEditing: true,
            saveEdit: 'Save',
        };
        this.handleInput = this.handleInput.bind(this);
        this.changeEditMode = this.changeEditMode.bind(this);
        this.Name = this.Name.bind(this);
        this.Email = this.Email.bind(this);
        this.Phone = this.Phone.bind(this);

    };
    handleInput(evt) {
        if (evt.target.id === 'cvName') {
            this.setState({
                name: evt.target.value,
            });
        } else if (evt.target.id === 'cvEmail') {
            this.setState({
                email: evt.target.value,
            });
        } else if (evt.target.id === 'cvPhone') {
            this.setState({
                phone: evt.target.value,
            });
        }
    }
    changeEditMode(evt) {
        evt.preventDefault();
        this.setState({
            isEditing: !this.state.isEditing,
        });
        if (this.state.isEditing) {
            this.setState({
                saveEdit: 'Edit',
            });
        } else {
            this.setState({
                saveEdit: 'Save',
            });
        }
    }
    Name() {
        if (this.state.isEditing) {
            return (
                <div>
                    <label htmlFor='cvName'>Name: </label>
                    <input name='cvName' id='cvName' type='text' onChange={this.handleInput} value={this.state.name}></input>
                </div>
            );
        } else {
            return (
                <div>
                    <label htmlFor='cvName'>Name: </label>
                    <span name='cvName' id='cvName'>{this.state.name}</span>
                </div>
            );
        }
    }
    Email() {
        if (this.state.isEditing) {
            return (
                <div>
                    <label htmlFor='cvEmail'>Email: </label>
                    <input name='cvEmail' id='cvEmail' type='email' onChange={this.handleInput} value={this.state.email}></input>
                </div>
            );
        } else {
            return (
                <div>
                    <label htmlFor='cvEmail'>Email: </label>
                    <span name='cvEmail' id='cvEmail'>{this.state.email}</span>
                </div>
            );
        }
    }
    Phone() {
        if (this.state.isEditing) {
            return (
                <div>
                    <label htmlFor='cvPhone'>Phone: </label>
                    <input name='cvPhone' id='cvPhone' type='tel' onChange={this.handleInput} value={this.state.phone}></input>
                </div>
            );
        } else {
            return (
                <div>
                    <label htmlFor='cvPhone'>Phone: </label>
                    <span name='cvPhone' id='cvPhone'>{this.state.phone}</span>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <this.Name />
                <this.Email />
                <this.Phone />
                <button onClick={this.changeEditMode}>{this.state.saveEdit}</button>
            </div>
        );
    }
}