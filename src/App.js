import SearchComponent from "./components/searching/Search";
import Todo from "./components/todo/Todo";
import AsyncComponent from './components/asyncDataTaking/AsyncComponent'

function App() {
  return (
    <div className="flex justify-between">
      <SearchComponent />
      <AsyncComponent />
      <Todo />
    </div>
  );
}

export default App;
