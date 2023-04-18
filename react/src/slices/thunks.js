import { setIsLoading, setTodos, setError , setRefresh, setPage,setPages,setFilter,setItems,setPaginaActual, setElementosPorPagina,setTotalDePaginas} from "./todoSlice"
import { useSelector } from "react-redux";


export const getTodos = (currentPage=0,itemsPerPage) => {

    return async (dispatch, getState) => {
        try {
        let url = "";
        const filter = getState().todos.filter;
        console.log("entra: "+JSON.stringify(filter))
        console.log("entra: "+filter.title,filter.userId)


        dispatch(setIsLoading(true));

        if (filter.title == ""&&filter.userId == "") {
            url =
                 currentPage > 0

                     ? `http://localhost:3004/todos?_page=${currentPage}&_limit=${itemsPerPage}`

                     : "http://localhost:3004/todos";
           //"http://localhost:3004/todos"
        }else if (!filter.userId == ""&&filter.title == ""){
            url =

                 currentPage > 0

                     ? `http://localhost:3004/todos?_page=${currentPage}&_limit=${itemsPerPage}&userId=${filter.userId}`  

                     : "http://localhost:3004/todos?userId=" + filter.userId.id;
                //"http://localhost:3004/todos?userId=" + filter.userId
        } else if (!filter.userId == ""&&!filter.title == ""){

            url =

             currentPage > 0

                 ? `http://localhost:3004/todos?_page=${currentPage}&_limit=${itemsPerPage}&title=${filter.title}&userId=${filter.userId}`

                 : "http://localhost:3004/todos?title=" + filter.title+"&userId=" + filter.userId;
            //"http://localhost:3004/todos?title=" + filter.title+"&userId=" + filter.userId;
        }
        else if (filter.userId == ""&&!filter.title == ""){
             
            url =

                 currentPage > 0

                     ? `http://localhost:3004/todos?_page=${currentPage}&_limit=${itemsPerPage}&title=${filter.title}`

                   : "http://localhost:3004/todos?title=" + filter.title;
            //"http://localhost:3004/todos?title=" + filter.title;
        }
 
            const headers = {

                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },

                method: "GET",
            };

            // const url = "http://localhost:3004/todos/?userId=" + idUser

            const data = await fetch(url, headers);

            const resposta = await data.json();
            //Coger todos los elementos que hay par divir entre 10 y sacar las paginas
            console.log(JSON.stringify(data.headers.get('X-Total-Count')))
            dispatch(setIsLoading(false));
            dispatch(setTodos(resposta));
            dispatch(setTotalDePaginas(Math.ceil(data.headers.get('X-Total-Count') / itemsPerPage)));

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

export const handleUpdate = (refresh,todo) => {

    return async (dispatch, getState) => {
             
        console.log(todo)
        try {
            const data = await fetch("http://localhost:3004/todos/" + todo.id, {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: "PUT",
                body: JSON.stringify({
                    userId: todo.userId,
                    title: todo.title,
                    completed: todo.completed==false?true:false  })
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

export const handleCreate = (dataa,refresh,userId) => {

    return async (dispatch, getState) => {
        
        console.log(dataa.title)

    try {
       
      const data = await fetch("http://localhost:3004/todos", {
        headers: {
            "Accept": "application/json",
          'Content-Type': 'application/json',
        },
        method: "POST",
        body: JSON.stringify({userId:userId,
                            title:dataa.title,
                            completed: false})
      });
      const resposta = await data.json();
        
        console.log(resposta)
        console.log("place creado")
       
        dispatch(setRefresh(!refresh))    
        // setFormulari({
        //              ...formulari,
        //              title: "",
        //            })
    } catch(err) {
      console.log(err.message);
      alert("Catchch");
    };}

    };
