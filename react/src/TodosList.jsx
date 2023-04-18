import React from 'react'
import TodoList from './TodoList'
import { useState, useEffect } from 'react';
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link } from 'react-router-dom';
import { getTodos } from './slices/thunks';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Paginate } from './Paginate';
import { setItems, setTodos } from './slices/todoSlice';
import { setTotalDePaginas } from './slices/todoSlice';
import { setPaginaActual } from './slices/todoSlice';
const TodosList = () => {
    //  let [todos, setTodos] = useState([]);
   // let { idUser, setIdUser, setFet,setRefresh } = useContext(UserContext);
    //let [formulari, setFormulari] = useState({});

    const dispatch = useDispatch();
    const { error = "", todos, isLoading, refresh,page,filter,currentPage,itemsPerPage,totalDePaginas} = useSelector((state) => state.todos);

     useEffect(() => {
         dispatch(getTodos(currentPage,itemsPerPage));
     }, [currentPage, itemsPerPage,refresh,filter]);
  
   console.log(totalDePaginas)

    // const deleteTodo = async (id) => {
    //     try {
    //         const data = await fetch("http://localhost:3004/todos/" + id, {
    //             headers: {
    //                 "Accept": "application/json",
    //                 "Content-Type": "application/json",
    //             },
    //             method: "DELETE",
    //         });
    //         const resposta = await data.json();
    //         console.log(resposta)
    //         console.log("todo eliminado")
    //         setRefresh(!refresh)

    //     } catch (err) {
    //         console.log(err.message);
    //         alert("Catchch");
    //     };
    // }
    // const getTodos = async () => {
    //     try {
    //         const data = await fetch("http://localhost:3004/todos/?userId=" + idUser, {
    //             headers: {
    //                 Accept: "application/json",
    //                 "Content-Type": "application/json",
    //             },
    //             method: "GET",
    //         });
    //         const resposta = await data.json();
          
    //         console.log(resposta)
    //         setTodos(resposta);


    //     } catch {
    //         console.log("Error");
    //         alert("Catchch");
    //     };
    // }


    // useEffect(() => {
    //     dispatch(getTodos(idUser));
    // }, [refresh]);
 
    // const handleUpdate = async (e, id) => {
    //     e.preventDefault();
    //     try {
    //         const data = await fetch("http://localhost:3004/todos/" + id, {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             method: "PUT",
    //             body: JSON.stringify({
    //                 userId: todos[id].userId,
    //                 title: todos[id].title,
    //                 completed: fet == "true" ? true : false
    //             })
    //         });
    //         const resposta = await data.json();
    //         console.log(resposta)
    //         console.log("place actu")
    //        setRefresh(!refresh)
    //     } catch (err) {
    //         console.log(err.message);
    //         alert("Catchch");
    //     };
    // }
    return (
        <>
        <div>
            {todos.length > 0 ?
                <table>
                    {todos.map((todo) => (
                        <tr key={todo.id}>
                            <TodoList todo={todo}  />
                        </tr>

                    ))}

                </table> :
                <p>no hi ha tasques a mostrar</p>
            }

        </div>

          <Paginate/>
        </>
    )
}

export default TodosList