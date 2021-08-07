import { TaskList } from "./components/TaskList";
import { Create } from "./components/Create";

function App() {
  return (
    <div className="w-11/12 max-w-screen-xl mx-auto md:w-3/5">
      <Create />
      <TaskList />
    </div>
  );
}

export default App;
