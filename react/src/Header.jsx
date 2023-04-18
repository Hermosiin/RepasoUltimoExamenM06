import React from 'react'
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from './UserContext';
import { setFilter } from './slices/todoSlice';
import { useDispatch } from 'react-redux';
//import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { useForm } from './hooks/useForm';
const Header = () => {
    let { idUser, setIdUser } = useContext(UserContext);
    const dispatch = useDispatch();
    //const { register, handleSubmit,formState: { errors },setValue,reset} = useForm();
    const { filter } = useSelector((state) => state.todos);
    const { formState, onInputChange } = useForm({
 
     filtrar: "",
 
    });
    const { filtrar } = formState
    console.log(filtrar)
    // const sendLogout = async (e) => {
    //     e.preventDefault();
    //     try {
            
    //         setIdUser("")
    //     }catch{
    //         console.log("Error");
    //         alert("Catchch");
    //       };
      
    // }  
    return (
        <>
        Bon dia, o bona tarda...
        <button className="btn btn-primary btn-block mb-4" 
        onClick={() => {setIdUser("")}}>Logout </button>
       <input type="text" name="filtrar" placeholder='filtrar por descripcion' onChange={onInputChange}></input>

        {/* <input type="text" placeholder='filtrar por descripcion' {...register("filtrar")}
        //name="filtrar" onChange={onInputChange}
        ></input> */}

        <button className="btn btn-primary" onClick={(e) => {dispatch(setFilter({...filter,title:formState.filtrar}))}}>Find</button>
        <button className="btn btn-primary" onClick={(e) => {dispatch(setFilter({title:"",userId:idUser}))}}>Mis sitios</button>
        <button className="btn btn-primary" onClick={(e) => {dispatch(setFilter({title:"",userId:""}))}}>Limpiar filtros</button>
        </>
    
)
}

export default Header
