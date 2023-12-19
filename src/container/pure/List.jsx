import React from "react";

const List = () => {
    return (
        <div>
            <h2 class="busqueda-title-results-search">Resultados: </h2>

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




                    <article class="busqueda-articulo-desktop" data-id="<%=pr.getId()%>" onclick="window.location.href = 'productDetail.jsp?id=<%=pr.getId()%>'">
                        <div class="contenedor-img-api" >
                            <img src="" alt="" />
                        </div>
                        <div class="busqueda-producto-description-desktop">
                            {/*
         <h3><%=pr.getTitle() %></h3>
        <p><%=pr.getCurrent_price()%>$</p>
      */}
                            <span>Vendido por:</span>
                        </div>
                    </article>

                </div>
            </section>
        </div>
    )
}

export default List;