import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSubCategory } from "../../services/actions/actionSubcategory";
import { Link } from "react-router-dom";


const selector = state => state.subCategory;
const NavCategory = ({data}) =>{

    const state = useSelector(selector);
    const dispatch = useDispatch();

    useEffect(_=> {dispatch(getAllSubCategory())},[]);

    function renderSubcategories(idCategory) {
        if (state.loader) return ;

        const subcategories = state.data.filter(item => item.category.id === idCategory);
        
        return (
            <>
                {subcategories.map((item, index) => 
                    (
                        <li className="panel-list-item" key={index}>
                            <Link key={index} to={"products/subcategory/"+item.title.replaceAll(" ", "_")}>{item.title}</Link>
                        </li>
                    )
                )}
            </>
        )
    }

    function renderizado(){
        if (data.length < 1 ) return;
        return (
            <>
            {data.map((item, index) => (
                <ul className="dropdown-panel-list">
                 <li className="menu-title" key={index}>
                  <Link className="filtro" key={index} data-id="ropa-accesorios" to={"products/category/"+item.title.replaceAll(" ", "_")}>{item.title}</Link>
                </li>
                {renderSubcategories(item.id)}
                

            </ul>
            ))}
            </>
        )
    }

    return(
        renderizado()

    );
}

export default NavCategory;