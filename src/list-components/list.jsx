import Task from "./task";

function list ({toDos}) {

    return <ul>
        <li>Task one 
            <input type="checkbox"></input>
            <button>Delete</button>
        </li>
        <li>Task Two 
            <input type="checkbox"></input>
            <button>Delete</button>
        </li>
        <li>
            <Task toDos={toDos}/>
        </li>
    </ul>
}

export default list;