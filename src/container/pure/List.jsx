import React from "react";
import { useNavigate } from "react-router-dom";

const List = ({ data, result }) => {

    const history = useNavigate();

    function nav(id) {
        history(`/products/${id}`);
    }

    return (
        <div>
            <h2 class="busqueda-title-results-search">Resultados: {result}</h2>

            <section class="busqueda-contenido-desktop">
                <div>
                    <div class="busqueda-filter-order-desktop">
                        <h3>Ordenar</h3>
                        <hr />
                        <p class="busqueda-filter"><a href="">A-Z</a></p>
                        <p class="busqueda-filter"><a href="">Z-A</a></p>
                        <p class="busqueda-filter"><a href="">#numeral</a></p>
                        <p class="busqueda-filter"><a href="">123</a></p>

                        <h3>Filtrar</h3>
                        <hr />
                        <p class="busqueda-filter" ><a href="">Precio</a></p>
                        <p class="busqueda-filter"><a href="">Nuevo</a></p>
                        <p class="busqueda-filter"><a href="">Usado</a></p>
                        <p class="busqueda-filter"><a href="">Talla</a></p>
                    </div>
                </div>


                <div class="busqueda-productos-desktop">


                    {data.map((item, index) => {
                        return (
                            <article key={index} class="busqueda-articulo-desktop" data-id={item.id} onClick={() => nav(item.id)}>
                                <div class="contenedor-img-api" >
                                    <img src="" alt="" />
                                </div>
                                <div class="busqueda-producto-description-desktop">

                                    <h3>{item.title}</h3>
                                    <p>{item.current_price}$</p>
                                </div>
                            </article>
                        )
                    })}

                </div>
            </section>
        </div>
    )
}

export default List;