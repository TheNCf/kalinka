import React from 'react';
import Cookies from 'universal-cookie';
import { animateScroll as scroll } from "react-scroll";

import css from './Header.module.css';

import Menubutton from '../UI Elements/Menubutton/Menubutton';

import {NavLink} from 'react-router-dom';

import logo from './../../img/logo.png'
import cart from './../../img/cart.png';
import { scrollToBottom } from 'react-scroll/modules/mixins/animate-scroll';

function Header(props) {
    const cookies = new Cookies();
    let allItems = cookies.getAll();
    allItems = Object.values(allItems);
    const empty = () => {}
    const scrollToBottom = () => {
        scroll.scrollToBottom({smooth: true, duration: 250})
    }

    return(
    <header className={css.header}>
        <div className="container">
            <nav className={css.menu}>
                <NavLink to="/" className="menulink"><img className={css.logo} src={logo} alt="Logo" /></NavLink>
                <ul className={css.menulist}>
                    <li><NavLink to="/search"  className="menulink"><Menubutton caption="Женская одежда" onClick={props.getKind} /></NavLink></li>
                    <li><NavLink to="/search"  className="menulink"><Menubutton caption="Детская одежда" onClick={props.getKind} /></NavLink></li>
                    <li><NavLink to="/search"  className="menulink"><Menubutton caption="Школьная одежда" onClick={props.getKind} /></NavLink></li>
                    <li><Menubutton caption="Контакты" onClick={scrollToBottom} /></li>
                </ul>
                <div style={{marginLeft: 'auto'}}><NavLink to="/cart" className="menulink"><Menubutton caption={allItems.length} img={cart} onClick={empty} /></NavLink></div>
            </nav>
        </div>
    </header>
    );
}

export default Header;