import AddTaskButton from "./input-components/add-task-button";
import Input from "./input-components/input";
import List from "./list-components/list";
import "./App.Module.css";

function App() {
  return (
    <div className="App">
      <List />
      <div className="Input-session">
      <Input />
      <AddTaskButton />
      </div>
    </div>
  );
}

export default App;
