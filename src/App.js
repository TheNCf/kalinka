import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Startpage from './components/Startpage/Startpage';
import Searchpage from "./components/Searchpage/Searchpage";
import Cart from "./components/Cart/Cart";
import Itemdescription from "./components/Itemdescription/Itemdescription";
import Createorder from "./components/Createorder/Createorder"
import Radiobutton from './components/UI Elements/Radiobutton/Radiobutton';

import {BrowserRouter, Route} from 'react-router-dom';

import image from "./img/itemcards/Layout04Blouse.png";

function App() {
  var radiocolors = (
    <div className="group">
      <Radiobutton color="#FFFFFF" name="colors" />
      <Radiobutton color="#D8D8D8" name="colors" />
      <Radiobutton color="#FFB6B6" name="colors" />
      <Radiobutton color="#909090" name="colors" />
      <Radiobutton color="#FFD3B0" name="colors" />
    </div>
  );
  var sizes = (
    <div className="group">
      <Radiobutton caption="164-84-90" name="sizes" fontcolor="#6A6A6A"/>
      <Radiobutton caption="164-84-92" name="sizes" fontcolor="#6A6A6A"/>
      <Radiobutton caption="164-88-94" name="sizes" fontcolor="#6A6A6A"/>
      <Radiobutton caption="164-88-96" name="sizes" fontcolor="#6A6A6A"/>
      <Radiobutton caption="164-92-98" name="sizes" fontcolor="#6A6A6A"/>
    </div>
);
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <div>
          <Route exact path="/" component={Startpage} />
          <Route path="/search" component={Searchpage} />
          <Route path="/cart" component={Cart} />
          
          <Route path="/order" component={Createorder} />
        </div>
        {/*
        <Itemdescription itemname="Блузка женская" img={image} price="23.99" radiocolors={radiocolors} sizes={sizes} />
        */}
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
