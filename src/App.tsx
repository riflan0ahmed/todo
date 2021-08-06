import { TaskList } from "./components/TaskList";
import { Create } from "./components/Create";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Create />
      <TaskList />
    </div>
  );
}

export default App;
