import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneProducts } from "../services/actions/actionProducts";

const selector = state => state.product
const Product = () => {
    const { id } = useParams();
    const state = useSelector(selector);
    const dispatch = useDispatch();

    useEffect(_ => { dispatch(getOneProducts(id)) }, []);
    console.log(state)
    function renderizado() {
        if (state.loader) return (<p>Cargando...</p>);
        if (state.error.exist) return (<div>Ha ocurrido un error: {state.error.message}</div>);

        return (
            <section id="mainProducto">
                <div className="containerMainProducto">

                    <div className="containerProducto">
                        <div className="divImagesProducto">
                            <div className="divImgProducto">
                                <img src="{{details.imgUrl.url1}}" alt="#" className="imgPrincipalProducto" />
                            </div>
                            <div className="divGaleryProducto">
                                <div className="imgMinProducto">
                                    <img src="{{details.imgUrl.url1}}" alt="#" className="imgSrc1" />
                                </div>
                                <div className="imgMinProducto">
                                    <img src="{{details.imgUrl.url2}}" alt="#" className="imgSrc2" />
                                </div>
                                <div className="imgMinProducto">
                                    <img src="{{details.imgUrl.url3}}" alt="#" className="imgSrc3" />
                                </div>
                                <div className="imgMinProducto">
                                    <img src="{{details.imgUrl.url4}}" alt="#" className="imgSrc4" />
                                </div>
                            </div>
                        </div>
                        <div className="containerCompraProducto">
                            <div className="informacionCompraProducto">
                                <div className="nombreProducto">
                                    <p>{state.data[0].title} </p>
                                </div>
                                <div className="valorProducto">
                                    <p>descipcion: {state.data[0].description} </p>
                                </div>
                                <div className="descriptionProducto">
                                    <p>precio: {state.data[0].current_price} $ </p>
                                </div>
                            </div>
                            <div className="agregarEnCarritoProducto">
                                <button className="agregaAlCarritoProducto" id="agregar">Agregar al carrito</button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        )
    }

    return renderizado();
}

export default Product;