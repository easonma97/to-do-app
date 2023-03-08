import Input from "./input-components/input";
import List from "./list-components/list";
import "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [toDos, setToDos] = useState([]);
  const [inputText, setInputText] = useState({content:'', completed: false, priority: ''});
  
  useEffect(() => {const storeData = JSON.parse(sessionStorage.getItem('myData'));
    if (storeData) {
      setToDos(storeData);
    }        
  }, []);
  useEffect(() => {sessionStorage.setItem('myData', JSON.stringify(toDos))}, [toDos]);
  
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
