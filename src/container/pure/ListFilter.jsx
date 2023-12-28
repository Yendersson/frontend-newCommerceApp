import React from "react";
import { useDispatch} from "react-redux";
import { filterByOrden } from "../../services/actions/actionProducts.js";

const ListFilter = () => {
    
    const dispatch = useDispatch();

    function orderBy(e) {
        dispatch(filterByOrden(e));
    }


    return (
        <div>
            <div className="busqueda-filter-order-desktop">
                <h3>Filtrar</h3>
                <hr />
                <p className="busqueda-filter" onClick={() => orderBy("ALFABETICO")}>A-Z</p>
                <p className="busqueda-filter" onClick={() => orderBy("P-MAYOR")}>Precio Mayor</p>
                <p className="busqueda-filter" onClick={() => orderBy("P-MENOR")}>Precio Menor</p>
                <hr />
            </div>
        </div>
    )
}

export default ListFilter;