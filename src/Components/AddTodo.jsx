function AddTodo() {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-5">
          <input type="text" placeholder="Enter todo Here!" />
        </div>

        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-3">
          <button type="button" className="btn btn-success kg-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
