import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addtodo: (state, action) => {
            state.push({
                id: Date.now(),
                text: action.payload,
                completed: false,

            })   
        },
        toggleTodo: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload)
            if(todo) {
                todo.completed = !todo.completed
            }
        },
        editTodo:  (state, action) => {
            const {id, newText} = action.payload
            const todo = state.find(todo => todo.id === id)
            if(todo) {
                todo.text = newText
            }
        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload)
        }
    }
})

export const { addtodo, deleteTodo, toggleTodo, editTodo } = todoSlice.actions
export const todoReducer = todoSlice.reducer