import React from 'react'
import { useContext } from 'react';
import { UserContext } from './UserContext';
import { useState } from 'react';
import { delTodo } from './slices/thunks';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { handleUpdate } from './slices/thunks';
import { setFet } from './slices/todoSlice';

const TodoList = ({ todo}) => {
   const { refresh, todos } = useSelector((state) => state.todos);
   let { idUser, setIdUser} = useContext(UserContext);
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
                  <button onClick={(e) => { dispatch(handleUpdate(refresh,todo)) }}>Fet</button>
               </td>
            </>
            : <>
               <td className='subratllat'>{todo.title}</td>
               <td>
                  <button onClick={(e) => { dispatch(delTodo(todo.id,refresh)) }}>🗑️</button>
               </td>
               <td>
                  <button onClick={(e) => { dispatch(handleUpdate(refresh,todo)) }}>Pendent</button>
               </td>
            </>
         }

      </>
   )
}

export default TodoList