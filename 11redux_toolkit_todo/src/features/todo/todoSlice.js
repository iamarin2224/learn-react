import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState, 
    reducers: { //contains properties and functions
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload //payload is a object in itself, here it expnds to payload.text (as we are putting it into text)
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }    
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer