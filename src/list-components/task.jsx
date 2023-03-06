import "./task.Module.css";

function task ({toDos}) {
    return <div className="task">
        <p>{toDos}</p>
        <input type="checkbox"></input>
        <button className="button">Delete</button>
    </div>
}

export default task;