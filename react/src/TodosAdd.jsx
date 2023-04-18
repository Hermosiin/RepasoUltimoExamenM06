import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { useDispatch, useSelector } from 'react-redux';
import { setError } from './slices/todoSlice';
import { handleCreate } from './slices/thunks';
import { useForm } from "react-hook-form";

const TodosAdd = () => {
  const { error = "" ,refresh} = useSelector((state) => state.todos);
  const dispatch=useDispatch();
  let { idUser, setIdUser} = useContext(UserContext);
  let [formulari, setFormulari] = useState({});
  let navigate = useNavigate();
  const { register, handleSubmit,formState: { errors },setValue,reset} = useForm();

  let { title, completed=false,userId=idUser } = formulari;
  // const formData = new FormData;
  // formData.append("userId", userId);

  // formData.append("title", title);
  // formData.append("completed", completed);

  const onSubmit = data => dispatch(handleCreate(data,refresh,userId));

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setFormulari({
  //     ...formulari,
  //     [e.target.name]: e.target.value
  //   })
    
  // };


  // const handleCreate = async (e) => {
  //   e.preventDefault();
  //   {title.length<4?
  //     setError("La longitud no puede ser menor qye 4"):
  //     <></>
  //   try {
     
  //     const data = await fetch("http://localhost:3004/todos", {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       method: "POST",
  //       body: JSON.stringify({userId:userId,
  //                           title: title,
  //                           completed: completed=="true"?true:false})
  //     });
  //     const resposta = await data.json();
        
  //       console.log(resposta)
  //       console.log("place creado")
       
  //       setRefresh(!refresh)     
        
  //       setFormulari({
  //         ...formulari,
  //         title: "",
  //       })
  //   } catch(err) {
  //     console.log(err.message);
  //     alert("Catchch");
  //   };}
  // }


  // const handleReset = (e) => {
  //   e.preventDefault()
  //   setFormulari({
  //     ...formulari,
  //     title: "",
  //   })
  // };

  return (
    <div>
    <div className="card ">
    <h1>Afegeix Todo</h1>
      <form method="post" onSubmit={handleSubmit(onSubmit)} className="separar" enctype="multipart/form-data">
        <div className="form-group">
          <textarea {...register("title", {
          required: "Aquest camp és obligatori",
          minLength: {

            value: 3,

            message: "La title ha de tenir al menys 20 caràcters"

          },

          maxLength: {

            value: 20,

            message: "La title pot tenir com a màxim 20 caràcters"

          },

          // pattern: {

          //   value: /^\S+(?:\s+\S+){1,}$/,

          //   message:

          //     "Has d'escriure minim dos paraules"

          // }
        })}
          // name="title" 
          // minLength={4} value={formulari.title} onChange={handleChange} 
          className="form-control" ></textarea>
        </div>
        {errors.title && <p>{errors.title.message}</p>}
        {/* <button className="btn btn-primary"
        //  onClick={(e) => {e.preventDefault(),        dispatch(handleCreate(formulari,refresh,userId,setFormulari));
          onClick={handleSubmit(onSubmit)}>Create
          </button> */}
          <button type="submit">Create</button>
        <button className="btn btn-secondary"
         onClick={()=>reset()}>Reset</button>
           </form>
    </div>
    {error}
  </div>
  )
}

export default TodosAdd