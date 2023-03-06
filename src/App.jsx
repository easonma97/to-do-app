import Input from "./input-components/input";
import List from "./list-components/list";
import "./App.Module.css";
import { useState } from "react";

function App() {
  const [toDos, setToDos] = useState("");

  function onChangeHandler(event){
    setToDos(event.target.value, ...toDos);
  }
  function handleSubmit(event){
    event.preventDefault();
  }
  
  return (
    <div className="App">
      <List toDos={toDos}/>
      <div className="Input-session">
      <Input setToDos={onChangeHandler} handleSubmit={handleSubmit}/>
      </div>
    </div>
  );
}

export default App;
