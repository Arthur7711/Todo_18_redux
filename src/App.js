import SearchComponent from "./components/searching/Search";
import Todo from "./components/todo/Todo";

function App() {
  return (
    <div className="flex justify-between">
      <SearchComponent />
      <Todo />
    </div>
  );
}

export default App;
