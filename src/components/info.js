import React from 'react';
import '../styles/Info.css';  // Certifique-se de que o caminho está correto
import { FaDollarSign, FaClock, FaCalendarAlt } from 'react-icons/fa';

function Info() {
    return (
    <div className="caixa">
    <div className="info-item">
        <FaClock size={30} color="black" />
        <span className="info-text">8h - 18h</span>
    </div>
    <div className="info-item">
        <FaCalendarAlt size={30} color="black" />
        <span className="info-text">Segunda - Sexta</span>
    </div>
    <div className="info-item">
        <FaDollarSign size={30} color="black" />
        <span className="info-text">Agende um orçamento</span>
    </div>
</div>
    );
}

export default Info;