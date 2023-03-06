import Task from "./task";

function list (props) {
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
            <Task />
        </li>
    </ul>
}

export default list;