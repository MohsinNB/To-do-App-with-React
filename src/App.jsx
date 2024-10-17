import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css";
import TodoItem from "./Components/TodoItem";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";
function App() {
  const initialTodoItems = [
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

  const [todoItems, setTodoItems] = useState(initialTodoItems);
  // console.log(typeof todoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`item added:item Name: ${itemName} item Date: ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteButtonClicked = (todoItemName) => {
    // console.log(`Item Deleted ${todoItemName}`);
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <center className="todo-container">
      {/* <AppName /> it's called self closing. */}
      <AppName />
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        OnDeleteClick={handleDeleteButtonClicked}
      ></TodoItems>
    </center>
  );
}

export default App;
