import React, { useEffect, useState } from "react";
import MpForm from "./MpForm";
import { useDispatch, useSelector } from "react-redux";
import { deleteKart } from "../services/actions/actionKart";

const selector = state => state.kart;

const Kart = () => {
  const state = useSelector(selector);
  const dispatch = useDispatch();

  const [payForm, setPayform] = useState(false);

  const totalPrice = state.items.length > 0 ? state.items.reduce((a, b) => a + (b.item.current_price * b.quantity), 0) : 0;

  function modalPayment() {
    setPayform(!payForm);
  }

  function getResponseModalPayment() {
    modalPayment();
  }

  function removeFromKart(e) {
    dispatch(deleteKart(e.target.dataset.id));
  }
  return (
    <div style={{ margin: "auto", maxWidth: "1000px" }}>

      <div className="headerCarrito">
        <h1 id="cart-title"> Bienvenido a tu carrito </h1>
        <h2></h2>
      </div>

      <table class="table mx-auto">
        <thead class="table-dark">
          <tr>
            <th><img src="/images/icons/carrito.png" className="imgCarrito" /></th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio unitario</th>
            <th>total</th>
            <th>borrar</th>
          </tr>
        </thead>
        <tbody>
          {state.items.map((item, index) =>
          (
            <tr key={index}>
              <td><img src={`http://localhost:18080/update/${item.item.picture}`} className="imgCarrito" /></td>
              <td>{item.item.title}</td>
              <td>{item.quantity}</td>
              <td>{item.item.current_price}</td>
              <td>{item.item.current_price * item.quantity}</td>
              <td><img src="images/icons/basura.png" width="40" height="40" data-id={item.item.id} onClick={(e) => removeFromKart(e)} /></td>
            </tr>
          )
          )}
        </tbody>
      </table>

      <div className="containerCarrito">
        <div id="final">
          <button className="boton1 btnCarrito">seguir comprando</button>
          <h2 id="precio-total">total:  {totalPrice}$</h2>
          <button className="boton2 btnCarrito" id="compra" onClick={modalPayment}>continuar</button>
          <button type="button" > <img src="images/icons/basura.png" className="eliminar" />
          </button>
        </div>
      </div>

      {payForm && (
        <MpForm closeModal={getResponseModalPayment} total={totalPrice} items={state.items}></MpForm>
      )}
    </div>

  )
}

export default Kart;