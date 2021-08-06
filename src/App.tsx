import { Users } from "./components/Users";
import { AddUser } from "./components/AddUser";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <AddUser />
      <Users />
    </div>
  );
}

export default App;
