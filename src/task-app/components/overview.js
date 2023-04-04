
export default function Overview({ taskArray, editTask }) {
    function handleClick(ID, description) {
        editTask(description, ID);
    }
    const items = taskArray.map((item) => {
        return (
            <li key={item.ID}>
                <button className="listItem" onClick={() => handleClick(item.ID, item.description)}>{item.description}</button>
            </li>
        );
    });

    return (
        <ol>{items}</ol>
    );
}
