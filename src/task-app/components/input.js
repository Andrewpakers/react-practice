export default function TaskInput({ handleSubmit, deleteTask, inputValue, setInputValue, taskID }) {
    let buttonText = 'Add';
    let isDeleteButtonVisibile = 'invisibile';
    if (taskID) {
        buttonText = 'Edit';
        isDeleteButtonVisibile = '';
    } else {
        buttonText = 'Add';
        isDeleteButtonVisibile = 'invisible';

    }
    function updateInputValue(evt) {
        const value = evt.target.value;
        setInputValue(value);
    }

    function handleClick(e) {
        e.preventDefault();
        handleSubmit(inputValue);
        setInputValue('');
    }
    function handleDelete(e) {
        e.preventDefault();
        deleteTask();
    }

    return (
        <form>
            <label htmlFor='task-input'>Task: </label>
            <input name='taskName' id='task-input' type='text' onChange={updateInputValue} value={inputValue}></input>
            <div>
            <button onClick={handleClick}>{buttonText}</button>
            <button className={isDeleteButtonVisibile} onClick={handleDelete}>Delete</button>
            </div>
        </form>
    );
}