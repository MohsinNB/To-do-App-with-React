import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ todoItems, OnDeleteClick }) => {
  return (
    <div className={styles.ItemContainer}>
      {todoItems.map((item) => (
        <TodoItem
          todoName={item.name}
          todoDate={item.dueDate}
          OnDeleteClick={OnDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
