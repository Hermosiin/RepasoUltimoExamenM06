import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    isLoading: false,

    error: "",

    todos: [],

    refresh: false,
    

}
const todoSlice = createSlice({

    name: "todos",

    initialState,

    reducers: {

        setTodo: (state, action) => {

            state.todos = action.payload

        },

        setIsLoading: (state, action) => {

            state.isLoading = action.payload

        },

        setError: (state, action) => {

            state.error = action.payload

        },
        setRefresh: (state, action) => {

            state.refresh = action.payload

        },

        // setFormulari: (state,action) => {

        // state.formulari = action.payload

        // },
   
    }

});

export const { setIsLoading,setTodo,setError,setRefresh } = todoSlice.actions;

export default todoSlice.reducer
