import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    isLoading: false,

    error: "",

    todos: [],

    refresh: false,


    filter: { title: "", userId: ""},

    currentPage:1,
    
    itemsPerPage:10,
    
    totalDePaginas:0
      

}
const todoSlice = createSlice({

    name: "todos",

    initialState,

    reducers: {

        setTodos: (state, action) => {

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

        setFilter: (state,action) => {

            state.filter = action.payload
            
        },
       
        setPaginaActual: (state,action) => {

            state.currentPage = action.payload
            
        },
        setElementosPorPagina: (state,action) => {

            state.itemsPerPage = action.payload
            
        },setTotalDePaginas: (state,action) => {

            state.totalDePaginas = action.payload
            
        },
   
    }

});

export const {setItems,setPaginaActual, setElementosPorPagina,setTotalDePaginas,setIsLoading,setTodos,setError,setRefresh,setFet, setPage, setPages,setFilter } = todoSlice.actions;

export default todoSlice.reducer
