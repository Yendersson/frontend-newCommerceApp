import React from "react";
import { Link } from "react-router-dom";

const NavCategoryMobile = ({data}) => {

    function accordionBtn(e) {
        console.log(e.target)
        e.target.nextElementSibling.classList.toggle('active');
        e.target.classList.toggle('active');
    }
    

    return (
        <>
            <button className="close-btn" data-mobile-menu-close-btn></button>
            <button className="accordion-menu" data-accordion-btn onClick={(e) => accordionBtn(e)}>
                <p className="menu-title" >Categorías</p>
                <div>
                    <ion-icon name="add-outline" className="add-icon"></ion-icon>
                    <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                </div>
            </button>

            <ul className="submenu-category-list" data-accordion>
                {data.map((item,index) =>
                    (
                        <li className="submenu-category" key={index}>
                            <Link to={"products/category/"+item.title.replaceAll(" ", "_")} className="submenu-title filtro" data-id={item.title.replaceAll("y", "-").trim()}>{item.title}</Link>
                        </li>
                    )
                )}
            </ul>
        </>
    )
}

export default NavCategoryMobile;