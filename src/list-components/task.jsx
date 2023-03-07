//import classes from "./task.module.css";

function task ({toDos, setToDos, setInputText}) {
    function deleteToDo(){
        setToDos((existingPosts) => existingPosts.filter(item => item !== toDos));
    }

    function markComplete(){
        setInputText(toDos.completed = toDos.completed ? false : true);
    }

    return <li>
        <p>{toDos.content}</p>
        <input type="checkbox" onClick={markComplete}></input>
        <button className="button" onClick={deleteToDo}>Delete</button>
    </li>
}

export default task;