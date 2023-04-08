import { useState } from 'react';

function Name({ isEditing, handleInput, name }) {
    if (isEditing) {
        return (
            <div>
                <label htmlFor='cvName'>Name: </label>
                <input name='cvName' id='cvName' type='text' onChange={handleInput} value={name}></input>
            </div>
        );
    } else {
        return (
            <div>
                <label htmlFor='cvName'>Name: </label>
                <span name='cvName' id='cvName'>{name}</span>
            </div>
        );
    }
}
function Email({ isEditing, handleInput, email }) {
    if (isEditing) {
        return (
            <div>
                <label htmlFor='cvEmail'>Email: </label>
                <input name='cvEmail' id='cvEmail' type='email' onChange={handleInput} value={email}></input>
            </div>
        );
    } else {
        return (
            <div>
                <label htmlFor='cvEmail'>Email: </label>
                <span name='cvEmail' id='cvEmail'>{email}</span>
            </div>
        );
    }
}
function Phone({ isEditing, handleInput, phone }) {
    if (isEditing) {
        return (
            <div>
                <label htmlFor='cvPhone'>Phone: </label>
                <input name='cvPhone' id='cvPhone' type='tel' onChange={handleInput} value={phone}></input>
            </div>
        );
    } else {
        return (
            <div>
                <label htmlFor='cvPhone'>Phone: </label>
                <span name='cvPhone' id='cvPhone'>{phone}</span>
            </div>
        );
    }
}

export default function GeneralInfo() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isEditing, setIsEditing] = useState(true);
    const [saveEdit, setSaveEdit] = useState('Save');

    function handleInput(evt) {
        if (evt.target.id === 'cvName') {
            setName(evt.target.value);
        } else if (evt.target.id === 'cvEmail') {
            setEmail(evt.target.value);
        } else if (evt.target.id === 'cvPhone') {
            setPhone(evt.target.value);
        }
    }
    function changeEditMode(evt) {
        evt.preventDefault();
            setIsEditing(!isEditing);
        if (isEditing) {
            setSaveEdit('Edit');
        } else {
            setSaveEdit('Save');
        }
    }
    return (
        <div>
            <Name isEditing={isEditing} handleInput={handleInput} name={name}/>
            <Email isEditing={isEditing} handleInput={handleInput} email={email}/>
            <Phone isEditing={isEditing} handleInput={handleInput} phone={phone}/>
            <button onClick={changeEditMode}>{saveEdit}</button>
        </div>
    );
}