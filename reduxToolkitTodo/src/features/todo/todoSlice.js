import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        AddTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        editTodo:(state,action)=>{
            const todo  =state.todos.find((todo)=>todo===action.payload)
            state.text=action.payload
        }
    }
})

export const {AddTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer