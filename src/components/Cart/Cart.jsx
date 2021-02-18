import React from 'react';

import css from './Cart.module.css';

import Cartitem from "../UI Elements/Cartitem/Cartitem";
import Radiobutton from "../UI Elements/Radiobutton/Radiobutton";
import Menubutton from "../UI Elements/Menubutton/Menubutton";

import {NavLink} from 'react-router-dom';

import image from "./../../img/itemcards/Layout04Blouse.png";

let itemColors = [
    '#FFFFFF',
    '#D8D8D8',
    '#FFB6B6',
    '#909090',
    '#FFD3B0'
];
let itemSizes = [
    '164-84-90',
    '164-84-92',
    '164-88-94',
    '164-88-96',
    '164-92-98'
];

function Cart() {

    let colorElements = itemColors.map(c => <Radiobutton color={c} name="colors" />)
    let sizeIElements = itemSizes.map(s =><Radiobutton caption={s} name="sizes" /> )

    var radiocolors = (
        <div className={css.group}>
            {colorElements}
        </div>
    );
    var radios = (
        <div className={css.group}>
            {sizeIElements}
        </div>
    );

    return(
        <div className="container">
            <h1>Корзина</h1>
            <div className={css.cartitems}>
                <Cartitem img={image} alt="Item Picture" itemname="Блузка женская" price="23.99" colors={radiocolors} radios={radios} />
                <Cartitem img={image} alt="Item Picture" itemname="Юбка женская" price="23.99" colors={radiocolors} radios={radios} />
            </div>
            <div className={css.cost}>
                <h1>Сумма: 59.97 руб.</h1>
                <div style={{marginLeft: 'auto'}}><NavLink to="/order"><Menubutton caption="Оформить заказ" fontsize="26px" /></NavLink></div>
            </div>
        </div>
    );
}

export default Cart;