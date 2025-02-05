import React from 'react';
import '../styles/Contact.css';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-texto">
                <p><strong>Entre em contato e descubra como podemos ajudar sua empresa a alcançar maior eficiência e produtividade. Solicite seu orçamento!</strong></p>
                <p><strong>Tiago Le Petit | Técnico Responsável | Le Petit Manutenção</strong></p>
            </div>

            <div className="contact-info">
                <a href="https://wa.me/5519991494792" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <FaWhatsapp size={30} color="black" />
                    <span className="contact-text">(19) 99149-4792</span>
                </a>
                <a href="mailto:LP.22manutencao@gmail.com" className="contact-item">
                    <FaEnvelope size={30} color="black" />
                    <span className="contact-text">LP.22manutencao@gmail.com</span>
                </a>
                <a href="https://www.instagram.com/lp22.manutencao" target="_blank" rel="noopener noreferrer" className="contact-item">
                    <FaInstagram size={30} color="black" />
                    <span className="contact-text">@lp22.manutencao</span>
                </a>
                <div className="contact-item">
                    <FaMapMarkerAlt size={30} color="black" />
                    <span className="contact-text">Rua dos Álamos, n° 246, Vila Boa Vista - Campinas-SP</span>
                </div>
            </div>
        </div>
    );
}

export default Contact;