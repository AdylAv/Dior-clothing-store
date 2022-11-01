import React from "react";
import './main.css';
import news from "./mainDB";
import { useState } from "react";
import { useEffect } from "react";

const filterNews = (searchText, listOfNews) => {
    if (!searchText) {
        return listOfNews;
    }
    return listOfNews.filter(({ tittle }) =>
    tittle.toLowerCase().includes(searchText.toLowerCase())
    );
}



const Main = () => {

    
    const [newsList, setNewsList] = useState(news);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(()=>{
        const Debounce = setTimeout (()=>{
            const filtredNews = filterNews(searchTerm, news);
            setNewsList(filtredNews);
        }, 300);
        return () => clearTimeout(Debounce)
    }, [searchTerm]);

    return(
        <>  




        
        <div className="input_wrapper">
        <input value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} placeholder="Search for news"></input>
        </div>

        <div className="wrapperCard">
            {newsList.map((el, index) => (
                
                <div className="card">
                    
                    <img key={index} className="img"  src={"./img/" + el.img} alt="item"></img>

                    <p className="titleCard">{el.tittle}</p>
                </div>
                  
            ))}
            
        </div>




    </>    
    
        
    )
}

export default Main;