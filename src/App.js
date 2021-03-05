import React, { useState } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Startpage from './components/Startpage/Startpage';
import Searchpage from "./components/Searchpage/Searchpage";
import Cart from "./components/Cart/Cart";
import Itemdescription from "./components/Itemdescription/Itemdescription";
import Createorder from "./components/Createorder/Createorder"

import {BrowserRouter, Route} from 'react-router-dom';

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
          <Route path="/item" render={() => <Itemdescription />} />
          <Route path="/order" render={() => <Createorder />} />
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
