import { setIsLoading, setTodo, setError , setRefresh} from "./todoSlice"
import { useSelector } from "react-redux";


export const getTodos = (idUser) => {

    return async (dispatch, getState) => {
        
        try {
            dispatch(setIsLoading(true));
            const headers = {

                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },

                method: "GET",
            };

            const url = "http://localhost:3004/todos/?userId=" + idUser

            const data = await fetch(url, headers);

            const resposta = await data.json();
            console.log(resposta)
            dispatch(setIsLoading(false));
            dispatch(setTodo(resposta));

        } catch (err) {
            dispatch(setError(err.message));
        };

    };

}

export const delTodo = (id,refresh) => {

    return async (dispatch, getState) => {
        console.log(id)
        try {
            const data = await fetch("http://localhost:3004/todos/" + id, {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                method: "DELETE",
            });
            dispatch(setRefresh(!refresh))
            console.log("todo eliminado")
        } catch (err) {
            console.log(err.message);
            alert("Catchch");
        };

    };

};

export const handleUpdate = (e,id,refresh,todos) => {
    return async (dispatch, getState) => {
        console.log(id)
        console.log(todos)
        e.preventDefault();
        try {
            const data = await fetch("http://localhost:3004/todos/" + id, {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: "PUT",
                body: JSON.stringify({
                    userId: todos[id].userId,
                    title: todos[id].title,
                    completed: fet == "true" ? true : false
                })
            });
            const resposta = await data.json();
            console.log(resposta)
            console.log("place actu")
            dispatch(setRefresh(!refresh))
        } catch (err) {
            console.log(err.message);
            alert("Catchch");
        };
    }

};

export const handleCreate = (formulari,refresh,userId,setFormulari) => {

    return async (dispatch, getState) => {
    try {
     
      const data = await fetch("http://localhost:3004/todos", {
        headers: {
            "Accept": "application/json",
          'Content-Type': 'application/json',
        },
        method: "POST",
        body: JSON.stringify({userId:userId,
                            title:formulari. title,
                            completed: formulari.completed=="true"?true:false})
      });
      const resposta = await data.json();
        
        console.log(resposta)
        console.log("place creado")
       
        dispatch(setRefresh(!refresh))    
        setFormulari({
                     ...formulari,
                     title: "",
                   })
    } catch(err) {
      console.log(err.message);
      alert("Catchch");
    };}

    };
