import Input from "./input-components/input";
import List from "./list-components/list";
import "./App.module.css";
import { useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]);
  const [inputText, setInputText] = useState({content:'', completed: false, priority: 0});
  return (
    <div className="App">
      <List toDos={toDos} setToDos={setToDos} setInputText={setInputText}/>
      <div className="Input-session">
      <Input setToDos={setToDos} inputText={inputText} setInputText={setInputText}/>
      </div>
    </div>
  );
}

export default App;
