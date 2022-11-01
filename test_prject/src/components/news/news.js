import { Link } from "react-router-dom";
import newsDB from "./newsDB";
import "./news.css"


const News = () =>{
    return(
        <div className="all">
        
        <div className='adress'>
        <Link to={'/'}><p className='strong_font'>Главная /<span className='weak_font'> Коллекция </span></p></Link>
        </div>
        <div className="allWrapperNews">
            {newsDB.map(el => (
                
                <div className="wraperNews">



                    <img src={"./imgForNews/" + el.img} alt="item"></img>
                    


                    <div className="rightSide">
                    <p className="titleNews">{el.title}</p>
                    <div className="desc">{el.desc}</div>     
                    </div>




                </div>
                
            ))}
            
        </div>
        
        </div>
        )
}

export default News;