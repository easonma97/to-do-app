function input({setToDos, handleSubmit}) {
    return <form>
        <label>Please input things to do: </label>
        <input type="text" onChange={setToDos}/>
        <button onClick={handleSubmit}>Add Task</button>
    </form>
}

export default input;