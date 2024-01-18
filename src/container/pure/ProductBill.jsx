import React from "react";

const ProductBill = ({ data }) => {

    return (
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`http://localhost:18080/update/${data.product.picture}`} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{data.product.title}</h5>
                        <p className="card-text">{data.product.current_price}</p>
                        <p className="card-text"><small className="text-body-secondary">{data.quantity}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductBill;