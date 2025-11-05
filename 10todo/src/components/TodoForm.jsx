import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("") //for a particular todo
    
    //!IMP hooks cannot be called inside of any function so declare it at top level
    const {addTodo} = useTodo() //use of context to get the methods/var we require

    const add = (e) => {
        e.preventDefault()
        if (!todo) return

        addTodo({text: todo, completed: false})
        setTodo("") //set todo empty for future todos
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo} //this is wiring of state with form
                onChange={(e) => setTodo(e.target.value)} //on change we set the todo
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0 cursor-pointer">
                Add
            </button>
        </form>
    );
}

export default TodoForm;
