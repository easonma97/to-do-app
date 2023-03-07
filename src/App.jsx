import Input from "./input-components/input";
import List from "./list-components/list";
import "./App.Module.css";
import { useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]);
  
  return (
    <div className="App">
      <List toDos={toDos}/>
      <div className="Input-session">
      <Input setToDos={setToDos}/>
      </div>
    </div>
  );
}

export default App;
