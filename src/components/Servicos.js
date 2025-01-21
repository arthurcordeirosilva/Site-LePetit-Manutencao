import React from "react";
import '../styles/Servicos.css';
import img1 from "../img/servicos-list-1.jpg";
import img2 from "../img/servicos-list-2.jpg";
import img3 from "../img/servicos-list-3.jpg";

function Servicos() {
    return (
        <div className="servicos-container">
            <div className="image-wrapper">
                <div className="background-box"></div>
                <div className="image-container">
                    <img src={img1} alt="Corte" className="service-image" />
                    <div className="overlay">
                        <p>Corte</p>
                    </div>
                </div>
            </div>
            <div className="image-wrapper">
                <div className="background-box"></div>
                <div className="image-container">
                    <img src={img2} alt="Solda" className="service-image" />
                    <div className="overlay">
                        <p>Solda</p>
                    </div>
                </div>
            </div>
            <div className="image-wrapper">
                <div className="background-box"></div>
                <div className="image-container">
                    <img src={img3} alt="Plasma" className="service-image" />
                    <div className="overlay">
                        <p>Plasma</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Servicos;