import { useEffect, useState } from "react"
import NewTodoForm from "./NewTodoForm"
import TodoList from "./TodoList"

function App() {
  const [todos,setTodos] = useState(() => {
    const localValue = localStorage.getItem('ITEMS')
    if(localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos))
  }, [todos])


  const addTodo = (title) => {

    setTodos((currentTodos) => {
      return [
        ...currentTodos, {id: crypto.randomUUID(), title: title, completed: false},
      ]
    })
  }
  

  const toggleTodos = (id, completed) => {
    setTodos(currentTodos => {
      return currentTodos.map((todo) => {
        if(todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    })
  } 

  const deleteTodo = (id) =>  {
    setTodos(currentTodos => {
      return currentTodos.filter((todo) => todo.id !== id )
    })
  }

  console.log(todos)

  return (
    <>
      <NewTodoForm addTodo={addTodo}/>
     <h1 className="header">Todo List</h1>
     <TodoList toggleTodos={toggleTodos} deleteTodo={deleteTodo} todos={todos}/>
     </>
  )
}

export default App
