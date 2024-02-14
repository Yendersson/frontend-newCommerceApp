import React from "react";
import { useNavigate } from "react-router-dom";
import ListFilter from "./ListFilter";

const List = ({ data, result }) => {

    const history = useNavigate();

    function nav(id) {
        history(`/products/${id}`);
    }

    return (
        <div>
            <h2 className="busqueda-title-results-search">Resultados: {result}</h2>

            <section className="busqueda-contenido-desktop">

                <ListFilter></ListFilter>

                <div className="busqueda-productos-desktop">

                    {data.length > 0? data.map((item, index) => {
                        return (
                            <article key={index} className="busqueda-articulo-desktop" data-id={item.id} onClick={() => nav(item.id)}>
                                <div className="contenedor-img-api" >
                                    <img src={`${item.picture}`} alt="" />
                                </div>
                                <div className="busqueda-producto-description-desktop">

                                    <h3>{item.title}</h3>
                                    <p>{item.current_price}$</p>
                                </div>
                            </article>
                        )
                    }):
                    (
                        <div>
                            <h2>No se encontraron resultados referente a la busqueda {result}</h2>
                        </div>
                    )
                    
                    }

                </div>
            </section>
        </div>
    )
}

export default List;