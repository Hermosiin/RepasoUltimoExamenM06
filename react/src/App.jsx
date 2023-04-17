import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Login from './Login';
import TodosList from './TodosList'
import TodosAdd from './TodosAdd'
import Todos from './Todos'

import { UserContext } from "./UserContext";
import Header from './Header';

function App() {
  let [idUser, setIdUser] = useState("");
  let [ocultar,setOcultar]=useState(false);
  let [refresh,setRefresh]=useState(false);
  let [fet, setFet]=useState(false) 

  return (
    <>
      <UserContext.Provider value={{ idUser, setIdUser,refresh,setRefresh,fet, setFet }}>
        {idUser ?
          <>
            <Header />
            <br></br>
            {ocultar?
            <>
            <button className="btn btn-primary" 
            onClick={(e) => {setOcultar(!ocultar)}}>Ocultar Afegir</button>
            </>
            :
            <>
             <button className="btn btn-primary" 
              onClick={(e) => {setOcultar(!ocultar)}}>Mostrar Afegir</button>
              <TodosAdd/>

              </>
            }
            <TodosList/>
            
          </>

          :
          <Login/>}
      </UserContext.Provider>
    </>


  )
}

export default App
