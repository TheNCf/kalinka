import React from 'react';
import Cookies from 'universal-cookie';

import css from './Header.module.css';

import Menubutton from '../UI Elements/Menubutton/Menubutton';

import {NavLink} from 'react-router-dom';

import logo from './../../img/logo.png'
import cart from './../../img/cart.png';

function Header(props) {
    const cookies = new Cookies();
    let allItems = cookies.getAll();
    allItems = Object.values(allItems);
    const empty = () => {}

    return(
    <header className={css.header}>
        <div className="container">
            <nav className={css.menu}>
                <NavLink to="/" className="menulink"><img className={css.logo} src={logo} alt="Logo" /></NavLink>
                <ul className={css.menulist}>
                    <li><NavLink to="/search"  className="menulink"><Menubutton caption="Женская одежда" onClick={props.getKind} /></NavLink></li>
                    <li><NavLink to="/search"  className="menulink"><Menubutton caption="Детская одежда" onClick={props.getKind} /></NavLink></li>
                    <li><NavLink to="/search"  className="menulink"><Menubutton caption="Школьная одежда" onClick={props.getKind} /></NavLink></li>
                    <li><NavLink to="/search"  className="menulink"><Menubutton caption="Контакты" onClick={empty} /></NavLink></li>
                </ul>
                <div style={{marginLeft: 'auto'}}><NavLink to="/cart" className="menulink"><Menubutton caption={allItems.length} img={cart} onClick={empty} /></NavLink></div>
            </nav>
        </div>
    </header>
    );
}

export default Header;