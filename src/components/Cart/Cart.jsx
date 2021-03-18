import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

import css from './Cart.module.css';

import Cartitem from "./Cartitem/Cartitem";
import Menubutton from "../UI Elements/Menubutton/Menubutton";

import {NavLink} from 'react-router-dom';

function Cart() {
    const cookies = new Cookies();
    let allItems = cookies.getAll();
    allItems = Object.values(allItems);

    const [reload, setReload] = useState(false);
    useEffect(() => {
        setReload(false);
    }, [reload])
    const initReload = () => {
        setReload(true);
    }

    let sum = 0;
    for (let i = 0; i < allItems.length; i++) {
        sum += parseFloat(allItems[i].price)
    }

    let cartElements = allItems.map(c => <Cartitem alt="Item Picture" itemname={c.name} price={c.price} color={c.color} size={c.size} quantity={c.quantity} reload={initReload} id={c.id} />);
    if (allItems.length > 0){
        return(
            <div className="container">
                <h1>Корзина</h1>
                <div className={css.cartitems}>
                    {cartElements}
                </div>
                <div className={css.cost}>
                    <h1>Сумма: {sum.toFixed(2)} руб.</h1>
                    <div style={{marginLeft: 'auto'}}><NavLink to="/order"><Menubutton caption="Оформить заказ" fontsize="26px" onClick="" /></NavLink></div>
                </div>
            </div>
        );
    } else {
        return(
            <div className="container">
                <h1>В корзине пусто...</h1>
            </div>
        );
    }
}

export default Cart;