import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const selector = state => state.category
const Category = () => {
    const state = useSelector(selector);

    console.log(state);

    function renderizado(){
        
    }
    return (
        <div className="category">
          <div className="container">
            <div className="category-item-container has-scrollbar"> 

            {state.data.map((item,index) => (
              <div className="category-item" key={index}>
                <div className="category-img-box">
                  <img src={item.picture} alt="dress &amp; frock" width="30" />
                </div>
                <div className="category-content-box">
                  <div className="category-content-flex">
                    <h3 className="category-item-title">{item.title}</h3>
                  </div>
                  <Link className="category-btn" to={"products/category/"+item.title.replaceAll(" ", "_")}>Ver todos</Link>
                </div>
              </div>
            ))}     
            </div>
          </div>
        </div>
    )
}

export default Category;