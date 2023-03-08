import React from "react";
import { useRef } from "react";

function Input({setToDos, inputText, setInputText}) {
    function handeInputText(event) {
        setInputText({...inputText, content: event.target.value});
    }

    function handleInputPriority(event) {
        setInputText({...inputText, priority: event.target.value});
    }

    function handleSubmit(event){
        event.preventDefault();
        const Post = inputText;
        setToDos(existingPosts => [Post, ...existingPosts]);
        setInputText({...inputText, content: ''});
      }

    return <form onSubmit={handleSubmit}>
        <label>Please input things to do: </label>
        <input type="text" value={inputText.content} onChange={handeInputText}/><br />
        <label>How important the thing is?</label>
        <select value={inputText.priority} onChange={handleInputPriority}>
            <option value="">Select an option</option>
            <option value='1'>The Most Important</option>
            <option value='2'>The Second Important</option>
            <option value='3'>Not that Important</option>
        </select>
        <button>Add Task</button>
    </form> 
}

export default Input;