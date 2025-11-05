import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [
        //initially create a dummy todo to undertsand the model, though we will be using default empty
        {
            id: 1,
            text: "Todo",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider