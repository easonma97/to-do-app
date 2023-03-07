import Task from "./task";
import classes from "./list.module.css";

function list ({toDos, setToDos, setInputText}) {
    return <>
        {toDos.length > 0 && <ul className={classes.list}>{toDos.map((toDo) => <Task key={toDo.content} toDos={toDo} setToDos={setToDos} setInputText={setInputText}/>)}</ul>}
        {toDos.length === 0 && <div><h2>You haven't input anything</h2> <p>Please input something</p></div>}
    </>
}

export default list;