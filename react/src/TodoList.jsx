import React from 'react'
import { useContext } from 'react';
import { UserContext } from './UserContext';
import { useState } from 'react';
import { delTodo } from './slices/thunks';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { handleUpdate } from './slices/thunks';

const TodoList = ({ todo,handleUpdate}) => {
   const { refresh, todos } = useSelector((state) => state.todos);
   let { idUser, setIdUser ,fet, setFet} = useContext(UserContext);
   const dispatch=useDispatch();
   
   return (
      <>
         {todo.completed ?
            <>
               <td>{todo.title}</td>
               <td>
                  <button onClick={(e) => { dispatch(delTodo(todo.id,refresh)) }}>🗑️</button>
               </td>
               <td>
                  <button onClick={(e) => { setFet(!fet),handleUpdate(e,todo.id) }}>Fet</button>
               </td>
            </>
            : <>
               <td className='subratllat'>{todo.title}</td>
               <td>
                  <button onClick={(e) => { dispatch(delTodo(todo.id,refresh)) }}>🗑️</button>
               </td>
               <td>
                  <button onClick={(e) => { setFet(!fet),handleUpdate(e,todo.id) }}>Pendent</button>
               </td>
            </>
         }

      </>
   )
}

export default TodoList