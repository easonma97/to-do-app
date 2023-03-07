import React from "react";

function Input({setToDos, inputText, setInputText}) {
    function handeInputText(event) {
        setInputText({content: event.target.value});
    }

    function handleInputPriority(event) {
        setInputText({priority: event.target.value});
    }

    function handleSubmit(event){
        event.preventDefault();
        const Post = inputText;
        setToDos((existingPosts) => [Post, ...existingPosts]);
        setInputText({content: ''});
      }

    return <form onSubmit={handleSubmit}>
        <label>Please input things to do: </label>
        <input type="text" value={inputText.content} onChange={handeInputText}/><br />
        <label>How important the thing is?</label>
        <select>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
        </select>
        <button>Add Task</button>
    </form> 
}

export default Input;