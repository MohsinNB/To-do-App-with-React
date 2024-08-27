import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems }) => {
  return (
    <div className="Item-container">
      {todoItems.map((item) => (
        <TodoItem todoName={item.name} todoDate={item.dueDate}></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
