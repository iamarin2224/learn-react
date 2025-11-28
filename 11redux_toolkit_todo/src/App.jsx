import AddTodo from './components/AddTodo'
import TodoItem from './components/TodoItem'

function App() {

  return (
    <div className="min-h-screen bg-gray-500 py-10">
      <div className="max-w-2xl mx-auto w-full px-4">
        <AddTodo/>
        <TodoItem/>
      </div>
    </div>

  )
}

export default App
