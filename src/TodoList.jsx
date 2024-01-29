import TodoItem from "./TodoItem"


function TodoList({todos, toggleTodos, deleteTodo}) {
  return (
    <ul className="list">
    {todos.length === 0 && "No odos" }
    {todos.map(todo => {
      return(
        <TodoItem 
        id={todo.id} 
        completed={todo.completed} 
        title={todo.title} 
        key={todo.id} 
        toggleTodos={toggleTodos}
        deleteTodo={deleteTodo}
        />
    )
    })}
    </ul>
  )
}

export default TodoList