import React from "react";
import './footer.css';
import { Link } from "react-router-dom";





const Footer = () => {
    return(
        <div className="wrapperFooter">
            <div className="forColums">



                <div className="first">
                    <img width={300} height={160}  src="./img/Dior-logos.svg" alt=""></img>
                </div>
                
                
                
                <div className="second">
                    <ul>
                        <li>Компания</li>
                        <li><Link to="/about">О нас</Link></li>
                        <li><Link to="/news">Новости</Link></li>
                        <li><a href="/">Главная</a></li>
                    </ul> 
                </div>

                <div className="third">
                    <ul>
                        <li>Контакты</li>
                        <li><a href="tel:+996500123456">+996 500 123 456</a></li>
                        <li><a href="tel:+996500123456">+996 500 123 456</a></li>
                        <li><a href="mailto:mail@gmail.com">mail@gmail.com</a></li>
                    </ul>
                </div>

                <div className="four">
                    <ul>
                        <li>Мы в социальных сетях:</li>
                        <li><a href="//www.instagram.com/cristiano/?hl=ru">Instagram</a></li>
                        <li><a href="//www.instagram.com">Telegram</a></li>
                        <li><a href="//www.instagram.com">Whatsapp</a></li>
                    </ul>
                </div>


            </div>

        </div> 
    
        
    )
}

export default Footer;
