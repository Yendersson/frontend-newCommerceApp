import React, { useEffect, useState } from "react";
import { CardPayment, initMercadoPago } from "@mercadopago/sdk-react";

initMercadoPago("TEST-e687118a-c544-4ece-9005-36d6b04cd62a", { locale: 'es-AR' });

const MpForm = ({closeModal, total}) => {

  function modalPayment() {
    closeModal();
  }

  const initialization = {
    amount: total,
  };

  const additional_info ={
    "items": [
        {
            "id": "5",
            "title": "Point Mini",
            "description": "Point product for card payments via Bluetooth.",
            "picture_url": "https://http2.mlstatic.com/resources/frontend/statics/growth-sellers-landings/device-mlb-point-i_medium2x.png",
            "category_id": "electronics",
            "quantity": 1,
            "unit_price": 58.8,
            "type": "electronics",
            "event_date": "2023-12-31T09:37:52.000-04:00",
            "warranty": false,
        }
    ],
    "payer": {
        "first_name": "Test",
        "last_name": "Test",
        "phone": {
            "area_code": 11,
            "number": "987654321"
        },
        "address": {
            "street_number": null
        }
    },
};
  const onSubmit = async (formData) => {
    const data = {...formData, additional_info};
    return new Promise((resolve, reject) => {
      fetch('http://localhost:18080/MpPayment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(resp => resp.json())
        .then(data => {
          resolve(data);
          console.log(data);
        })
        .catch(error => {
          reject();
          console.log(error)
        })
    });
  };

  const onError = async (error) => {
    alert("Ha ocurrido un error: "+ error);
    console.log(error);
  };

  const onReady = async () => {
    console.log("ready")
  };

  function renderizado() {
    return (
      <div className="Pago-carrito-carrito show">
        <div className="popop-carrito">
          <div className="contenedor-carrito">
            <CardPayment
              initialization={initialization}
              onSubmit={onSubmit}
              onReady={onReady}
              onError={onError}
            />
            <div>
              <a onClick={modalPayment} id="cerrar">cerrar</a>
            </div>
          </div>
        </div >
      </div >
    )
  }

  return renderizado();
}

export default MpForm