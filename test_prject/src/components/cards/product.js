
import items from "./card";
import { useState } from "react";
import "./product.css"
import Advantages from "../advantages/advantages"
import { Link } from "react-router-dom";

const Product = ({name}) =>{
    const [popupcontent, setpopupcontent] = useState([]);
    const [popuptogle, setpopuptogle] = useState (false)
    const changeContent = (el) => {
        setpopupcontent([el]);
        setpopuptogle(!popuptogle);
    }

    const [count, setCount] = useState(1)

    let searchCardFilter = items.filter(items=> items.tittle.toLowerCase().includes(name)).length;


    return(
        <>
        <div className="allCardWrapper">
        
        <div className="wrapperCard">
            {items.filter(items=> items.tittle.toLowerCase().includes(name)).filter((item, idx) => idx < 4 * count).map(el => (
                
                <div key={items.id} className="card">
                    
                    <img onClick = {()=> changeContent(el)} src={"./imgForCards/" + el.img} alt="item"></img>

                    <p className="titleCard">{el.tittle}</p>
                    <div className="colorCard"><img src="./imgForCards/Frame 1325.svg" alt="#"></img></div>
                    <div>{el.size}</div>
                    <div className="prise">{el.price}</div>
                    <div  className="detals"  onClick = {()=> changeContent(el)}>Детали</div>
                  </div>
                  
            ))}
            
        </div>
        {popuptogle&&<div className="pop_up_container"onClick = {changeContent}> 
            <div className="pop_up_body">
                <div className="pop_up_header">
                        <div onClick={changeContent}>x</div>
                    </div>
                    <div className="pop_up_content">
                    {popupcontent.map((pop)=>{
                        return(
                            <div className="pop_up_card"><div className="dflex">
                                <img className="pop_up_img" src={"./imgForCards/" + pop.img} alt="item"></img>
                                <div className="infor">
                                <img src="./imgForCards/Frame 1325.svg" alt="#"></img>
                                    <p>Название товара: {pop.name}</p>
                                    <p>Цена: {pop.price}</p>
                                    <p>Наличие: {pop.have}</p>
                                    <p>Оде́жда — изделие или совокупность изделий, надеваемых человеком и несущих утилитарные и эстетические функции.</p>
                                    <p className="favorite">В избранное <span className="heart">♡</span></p>
                                    <Link to="/basket"> <p className="for_basket">Купить</p></Link>
                                </div>
                                </div>
                            </div>
                        )
                    })}
                    </div></div>
                    
                </div>} 
  
                
                
        </div>
        <div  className="idxCounter">показано {count * 4 > searchCardFilter ? searchCardFilter : 4 * count} из {searchCardFilter}</div>
        <div style={
            
            {display : count * 4 > searchCardFilter ? "none" : "block"}
            
            
            }  className="idxChanger" onClick={()=> setCount (count + 1)}>Показать еще</div>
{
    !searchCardFilter && <div  className="notFound">По вашему запросу ничего не найдено</div>
}

            
                    
        <Advantages/></>
        )
}

export default Product;