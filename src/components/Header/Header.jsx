import React from 'react';

import css from './Header.module.css';

import Menubutton from '../UI Elements/Menubutton/Menubutton';

import {NavLink} from 'react-router-dom';

import logo from './../../img/logo.png'
import cart from './../../img/cart.png';

function Header() {
    return(
    <header className={css.header}>
        <div className="container">
            <nav className={css.menu}>
                <NavLink to="/" className="menulink"><img className={css.logo} src={logo} alt="Logo" /></NavLink>
                <ul className={css.menulist}>
                    <li><NavLink to="/search"  className="menulink"><Menubutton caption="Женская одежда" /></NavLink></li>
                    <li><Menubutton caption="Детская одежда" /></li>
                    <li><Menubutton caption="Школьная одежда" /></li>
                    <li><Menubutton caption="Контакты" /></li>
                </ul>
                <div style={{marginLeft: 'auto'}}><NavLink to="/cart" className="menulink"><Menubutton caption="3" img={cart} /></NavLink></div>
            </nav>
        </div>
    </header>
    );
}

export default Header;