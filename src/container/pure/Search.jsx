import React from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const history = useNavigate();

    function searching() {
        const like = document.querySelector("#search").value;
        if (like != null && like.length > 0) {
            history(`/products/search/${like}`);
        } else {
            alert("Debes escribir algo");
        }
    }       

    return (
        <div className="header-search-container">

            <input type="search" name="search" className="search-field" id="search" placeholder="Buscar productos..."/>

            <button className="search-btn" id="search-btn" onClick={searching}>
                <ion-icon name="search-outline"></ion-icon>
            </button>

        </div>

    )
}

export default Search;