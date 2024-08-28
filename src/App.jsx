import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css";
import TodoItem from "./Components/TodoItem";
import TodoItems from "./Components/TodoItems";
function App() {
  const todoItems = [
    {
      name: "Buy milk",
      dueDate: "4/07/24",
    },
    {
      name: "Goto College",
      dueDate: "4/07/24",
    },
    {
      name: "Complete This video course",
      dueDate: "Any HOw",
    },
    {
      name: "I will be a web Developer",
      dueDate: "within 1 year Insha Allah",
    },
  ];
  // console.log(typeof todoItems);
  return (
    <center className="todo-container">
      {/* <AppName /> it's called self closing. */}
      <AppName />
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
