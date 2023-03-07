import React from "react";
import { useState } from "react";

function Input({setToDos}) {
    const [inputText, setInputText] = useState('');

    function handeInputText(event) {
        setInputText(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        const Post = inputText;
        setToDos((existingPosts) => [Post, ...existingPosts]);
        setInputText('');
      }

    return <form onSubmit={handleSubmit}>
        <label>Please input things to do: </label>
        <input type="text" value={inputText} onChange={handeInputText}/>
        <button>Add Task</button>
    </form> 
}

export default Input;