import React, { useEffect, useState } from "react";

const Banner = ({ data }) => {

    const [slideIndex, setSlideIndex] = useState(1);
    useEffect(_ => {
        showSlides(slideIndex);
    },[slideIndex])

    
    function plusSlides(n) {
        setSlideIndex(slideIndex+n)
        showSlides(slideIndex);
    }

    function currentSlide(n) {
        setSlideIndex(n)
        showSlides(slideIndex);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("Banner");
        let dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        
        
        let index = slideIndex;
        if (n > slides.length) {setSlideIndex(1); index = 1; /*slideIndex = 1*/}
        if (n < 1) {setSlideIndex(slides.length); index = slides.length;/*slideIndex = slides.length*/}

        slides[index-1].style.display = "block";
        dots[index-1].className += " active";
    }

    return (
        <div>
            <div className="slideshow-container">
                {data.images.map((item,index)=> (
                    <div className="Banner fade" key={index}>
                        <img src={`http://localhost:18080/update/${item.url}`} style={{width:"100%"}}/>
                    </div>
                ))}

                <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                <a className="next" onClick={() => {plusSlides(1)}}>&#10095;</a>
            </div>

            <br />

                

                <div style={{textAlign:"center"}}>
                    {data.images.map((item,index)=> (
                        
                        <span className="dot" data-index={index+1} key={index} onClick={() => currentSlide(index+1)}></span>
                    ))}

                </div>
        </div>
    )
}

export default Banner;