import { useDispatch, useSelector } from "react-redux";
import { setPaginaActual } from "./slices/todoSlice";

export const Paginate = ({}) => {
    const dispatch = useDispatch();

    const { pages ,totalDePaginas,currentPage,itemsPerPage} = useSelector((state) => state.todos);

    return (
        <>
            <ul class="flex flex-row">
            
            <button onClick={() =>  dispatch(setPaginaActual(currentPage - 1))}disabled={currentPage === 1}>Anterior</button>
            <button onClick={() =>  dispatch(setPaginaActual(currentPage + 1))}disabled={currentPage === totalDePaginas}>Siguiente</button>

            </ul>
        </>
    )
}