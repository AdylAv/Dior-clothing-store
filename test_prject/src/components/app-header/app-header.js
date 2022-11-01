import React, {useState} from "react";
import "./app-header.css"
import { Link } from "react-router-dom";



const AppHeaderse = () => {

    const [open, setOpen] = useState(false);


    return(
        <div className="wraperHader">
            <div className="headerUp">
            <ul>
                <li>
                    <Link to="/">Главная</Link>
                </li>
               <li>
                <Link to="/about">О нас</Link>
                </li>
                <li>
                    <Link  to="/collection">Колекция</Link>
                    </li>
                <li>
                    <Link  to="/news">Новости</Link>
                    </li>
            </ul>
            
            <a className="singIn" href="##" onClick={()=> setOpen (true)}>Войти</a>
            <a className="link" href="tel:+996 000 00 00 00"><span>Тел:</span> +996 000 00 00 00 </ a>
        </div>


        {
            
    open && (<div className="overlay">


    <div className="modal">


        <div onClick={()=> setOpen (false)} className="closeModal">
        x
        </div>

        <span>Регистрация</span>
        
        
        <div className="d-flex">

        <div><input placeholder="Ваше имя"></input>
        <input placeholder="Пароль"></input></div>
        
        <div><input placeholder="Повторный пороль"></input></div>

        </div>


        <button onClick={()=> setOpen (false)}>Оставить заявку</button>
    
    </div>





</div>)
}
        </div> 
    
        
    )
}

export default AppHeaderse;
