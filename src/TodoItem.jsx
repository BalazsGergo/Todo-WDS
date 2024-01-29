

function TodoItem({completed, id, title, toggleTodos, deleteTodo}) {
  return (
    <li>
    <label >
      <input type="checkbox" checked={completed} onChange={e => toggleTodos(id, e.target.checked)} 
      />
      {title}
    </label>
    <button onClick={() => deleteTodo(id)} 
    className="btn btn-danger">Delete</button>
    </li>
  )
}

export default TodoItem