import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodos: (state, action) => {
            state.push(action.payload);
            return state
        },
        removeTodos: (state, action) => {
            return state.filter((item, key) => key !== action.payload);
        }
    }
})

export const { addTodos, removeTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
