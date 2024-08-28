import styles from "./TodoItem.module.css";
function TodoItem(props) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-5">
          <h2>{props.todoName}</h2>
        </div>

        <div className="col-4">
          <h2>{props.todoDate}</h2>
        </div>
        <div className="col-3">
          <button
            type="button"
            className={`${styles["ProductButton"]} btn btn-danger`}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
