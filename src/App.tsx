import { TaskList } from "./components/TaskList";
import { Header } from "./components/Header";
import { Create } from "./components/Create";

function App() {
  return (
    <div className="w-11/12 max-w-screen-xl mx-auto md:w-3/5">
      <div className="mx-auto my-5 ">
        <h1 className="text-xl font-bold text-center text-gray-600 capitalize">
          Todo App
        </h1>
      </div>
      <Header />
      <TaskList />
      <Create />
    </div>
  );
}

export default App;
