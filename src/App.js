import React, { useState } from 'react';

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

let radiocolors = (
  <div className="group">
    <Radiobutton color="#FFFFFF" name="colors" />
    <Radiobutton color="#D8D8D8" name="colors" />
    <Radiobutton color="#FFB6B6" name="colors" />
    <Radiobutton color="#909090" name="colors" />
    <Radiobutton color="#FFD3B0" name="colors" />
  </div>
);
let sizes = (
  <div className="group">
    <Radiobutton caption="164-84-90" name="sizes" fontcolor="#6A6A6A"/>
    <Radiobutton caption="164-84-92" name="sizes" fontcolor="#6A6A6A"/>
    <Radiobutton caption="164-88-94" name="sizes" fontcolor="#6A6A6A"/>
    <Radiobutton caption="164-88-96" name="sizes" fontcolor="#6A6A6A"/>
    <Radiobutton caption="164-92-98" name="sizes" fontcolor="#6A6A6A"/>
  </div>
);

function App() {

  const [currentKind, setCurrentKind] = useState('Женская одежда');

  const getKind = (value) => {
    setCurrentKind(value);
  }


  return (
    <BrowserRouter>
      <div>
        <Header getKind={getKind} />
        <div>
          <Route exact path="/" render={() => <Startpage />} />
          <Route path="/search" render={() => <Searchpage kind={currentKind} />} />
          <Route path="/cart" render={() => <Cart />} />
          <Route path="/item" render={() => <Itemdescription radiocolors={radiocolors} sizes={sizes} />} />
          <Route path="/order" render={() => <Createorder />} />
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
