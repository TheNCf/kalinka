import React from 'react';

import css from './Startpage.module.css';

import Itemcard from '../UI Elements/Itemcard/Itemcard';

import itemplaceholder from './../../img/itemcards/Layout04Blouse.png';

let discounts = [
    {itemname: 'Блузка женская', price: '23.99', discount: '25', img: itemplaceholder},
    {itemname: 'Блузка женская', price: '13.99', discount: '20', img: itemplaceholder},
    {itemname: 'Блузка женская', price: '20.99', discount: '20', img: itemplaceholder},
    {itemname: 'Блузка женская', price: '19.99', discount: '15', img: itemplaceholder}
];

let newItems = [
    {itemname: 'Блузка женская', price: '23.99', discount: '0', img: itemplaceholder},
    {itemname: 'Блузка женская', price: '13.99', discount: '0', img: itemplaceholder},
    {itemname: 'Блузка женская', price: '20.99', discount: '0', img: itemplaceholder},
    {itemname: 'Блузка женская', price: '19.99', discount: '0', img: itemplaceholder}
];

let discountElements = discounts.map( i => <Itemcard itemname={i.itemname} price={i.price + ' руб.'}  discount={i.discount} img={i.img} margin="0 5px" /> );
let newElements = newItems.map( n => <Itemcard itemname={n.itemname} price={n.price + ' руб.'} discount={n.discount} img={n.img} margin="0 5px" /> );

function Startpage() {
    return (
        <div className="container">
            <div className={css.group}>
                <h1>Распродажа</h1>
                <div className={css.items}>
                    {discountElements}
                </div>
            </div>

            <div className={css.group}>
                <h1>Новинки</h1>
                <div className={css.items}>
                    {newElements}
                </div>
            </div>
        </div>
    );
}

export default Startpage;