
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import './App.css';
import React, {useState} from 'react';
import AppHeaderLow from './components/app-header-low/AppHeaderLow';
import AppHeaderse from './components/app-header/app-header';
import About from './components/aboutUs/about';
import Footer from './components/footer/footer';
import Items from './components/collection/items';
import News from './components/news/news';
import Product from './components/cards/product';
import Basket from './components/basket/basket';


function App() {



const [name, setName] = useState('')

const handalNameChange = (name) =>{
  setName(name)
}


  return (
  <>
  
   
   <Router>
   <AppHeaderse/>
   <AppHeaderLow onChange={handalNameChange}/>
  
      <Routes>
          
           <Route path='/' element={<Product name={name}/>}/>
           <Route path="/about" element={<About />} />
           <Route path="/collection" element={<Items/>} />
           <Route path="/news" element={<News/>} />
           <Route path="/basket" element={<Basket/>} />
           
      </Routes>
      
      <Footer/>
    </Router>
    </>
  );
}

export default App;
