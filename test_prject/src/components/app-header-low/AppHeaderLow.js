import React from "react";
import "./AppHeaderLow.css"
import { Link } from "react-router-dom";








const AppHeaderLow = ( {onChange} ) => {
    
    const handalNameChange = (event) => {
        onChange(event.target.value)
    }

    
    return(

        <>
       <div className="wraperHaderLow">
           <div className="wrapper">

              <a href="/"><img width={150} height={60} src="./img/logo2.svg" alt=""/></a>



                <input 

                onChange={handalNameChange}
               
                
                className="search" type='text' placeholder="Поиск" ></input>




                <a href="+"><img width={19} height={17} src="./img/favorite.png" alt=""/> Избранное</a>
                <Link  to="/basket"><img width={19} height={17} src="./img/korzina.png" alt=""/> Корзина</Link>



                 
            </div>




           






        </div>
        
        </>
    )
}


export default AppHeaderLow; 