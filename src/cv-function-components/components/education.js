import { useState } from 'react';

const RenderInput = ({ isEditing, handleInput, inputName, inputDegree, inputDate }) => {
    if (isEditing) {
        return (
            <form>
                <label htmlFor='schoolNameInput'>School Name: </label>
                <input name='schoolName' id='schoolNameInput' type='text' onChange={handleInput} value={inputName}></input>
                <label htmlFor='schoolDegreeInput'>Degree: </label>
                <input name='schoolDegree' id='schoolDegreeInput' type='text' onChange={handleInput} value={inputDegree}></input>
                <label htmlFor='schoolDateInput'>Graduation Date: </label>
                <input name='schoolDate' id='schoolDateInput' type='date' onChange={handleInput} value={inputDate}></input>
            </form>
        );
    } else {
        return null;
    }
}

const RenderSchools = ({ schools, handleEdit }) => {
    return (
        schools.map((school) => {
            return (
                <li key={school.id}>
                    <span className='schoolItem schoolName'>Name: {school.name}</span>
                    <span className='schoolItem schoolDegree'>Degree: {school.degree}</span>
                    <span className='schoolItem schoolDate'>Gradutation Date: {school.date}</span>
                    <button onClick={() => handleEdit(school.name, school.degree, school.date, school.id)}>Edit</button>
                </li>
            );
        })
    );
}
export default function Education() {
    const [schools, setSchools] = useState([]);
    const [isEditing, setIsEditing] = useState(true);
    const [saveNew, setSaveNew] = useState('Save');
    const [inputName, setInputName] = useState('');
    const [inputDegree, setInputDegree] = useState('');
    const [inputDate, setInputDate] = useState('');
    const [inputID, setInputID] = useState(Math.random());

    function handleEdit(name, degree, date, id) {
        setInputName(name);
        setInputDegree(degree);
        setInputDate(date);
        setInputID(id);
        setIsEditing(true);
        setSaveNew('Save');
    }
    function handleInput(evt) {
        if (evt.target.id === 'schoolNameInput') {
            setInputName(evt.target.value);
        } else if (evt.target.id === 'schoolDegreeInput') {
            setInputDegree(evt.target.value);
        } else if (evt.target.id === 'schoolDateInput') {
            setInputDate(evt.target.value);
        }
    }
    function handleSubmit() {
        if (isEditing) {
            const newSchool = {
                name: inputName,
                degree: inputDegree,
                date: inputDate,
                id: inputID,
            }
            const newSchoolArray = schools.filter((school) => {
                return school.id !== inputID;
            });
            newSchoolArray.push(newSchool);
            setSchools(newSchoolArray);
            setIsEditing(false);
            setSaveNew('New');
            setInputName('');
            setInputDegree('');
            setInputDate('');
            setInputID(Math.random());
        } else {
            setIsEditing(true);
            setSaveNew('Save');
        }
    }

    return (
        <div>
            <RenderInput isEditing={isEditing} handleInput={handleInput} inputName={inputName}
            inputDegree={inputDegree} inputDate={inputDate}/>
            <button onClick={handleSubmit}>{saveNew}</button>
            <ol>
                <RenderSchools schools={schools} handleEdit={handleEdit}/>
            </ol>
        </div>
    );

}