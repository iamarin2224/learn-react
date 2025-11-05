import { useEffect, useState } from 'react'
import { TodoProvider } from './context/TodoContext'
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm'

function App() {
  const [todos, setTodos] = useState([])

  //we pass the todo, which is expected to have the value of text and completed, the '...' operator helps in spreading the existing var
  //we use prev as we need to know the prev array and modify over it
  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo} ,...prev])
  }

  //concise way to write the required, map fn modifies the given array
  //it checks for each todo (here as prevTodo) if it matches the given id then replaces with passed todo, else uses the org
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id===id ? todo : prevTodo))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id===id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  //have to keep this get item effect on top of set item, else every time react will set the todos to be empty and render it empty
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])  //with empty array effect runs only once, right after the component mounts

  useEffect(() => {
    //localStorage stores everything in string format, in a key value pair
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  
  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  <TodoForm/>
              </div>
              <div className="flex flex-wrap gap-y-3">
                {/* keys as unique id are required when we loop through many different elements to increase the performamce */}
                  {
                    todos.map((todo) => (
                      <div key={todo.id} className='w-full'>  
                        <TodoItem todo={todo}/>
                      </div>
                    ))
                  }
              </div>
          </div>
      </div>
    </TodoProvider>
  )
}

export default App
