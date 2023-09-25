import React from 'react'
import { article } from "./Datas"
import { useState } from 'react';

const Korosel = () => {
    const [currentLanguage, setCurrentLanguage] = useState("en");
    function gantiBahasa() {
        setCurrentLanguage(currentLanguage === "en" ? "id" : "en");
    }

    return (
        <div className="container position-relative">
            <div id="KoroselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" className="d-block w-100"
                            alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" className="d-block w-100"
                            alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" className="d-block w-100"
                            alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <h1 className="text-center">{article.title[currentLanguage]}</h1>
            <p className="text-center">{article.description[currentLanguage]}</p>
            <button className='btn btn-warning mb-2' onClick={gantiBahasa}>Change Language</button>
        </div>
    )
}

export default Korosel