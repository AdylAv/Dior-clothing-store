import { Link } from "react-router-dom";
import collecDB from "./collecDB";
import "./items.css"


const Items = () =>{
    return(
        <div className="all">
        
        <div className='adress'>
        <Link to={'/'}><p className='strong_font'>Главная /<span className='weak_font'> Коллекция </span></p></Link>
        </div>
        <div className="df">
            {collecDB.map(el => (
                
                <div className="wraperItems">
                    <img src={"./imgForCollection/" + el.img} alt="item"></img>
                    <p className="title">{el.title}</p>
                    <div className="openCard">Смотреть все ▷</div>      
                                  </div>
                
            ))}
            
        </div>
        
        </div>
        )
}

export default Items;