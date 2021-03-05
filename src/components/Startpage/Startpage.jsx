import React, { useState, useEffect } from 'react';

import css from './Startpage.module.css';

import Itemcard from '../UI Elements/Itemcard/Itemcard';

import itemplaceholder from './../../img/itemcards/Layout04Blouse.png';

import { connect } from 'react-redux';
import { getNewModels, getDiscountModels } from '../../Redux/action';

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

function Startpage(props) {
    const [newModels, setNewModels] = useState([]);
    const [discountModels, setDiscountModels] = useState([]);
    const [downloadFlag, setDownloadFlag] = useState(true);

    useEffect(() => {
        setNewModels(props.modelsdata.new);
        setDiscountModels(props.modelsdata.discount);
    }, [props.modelsdata, props.itemsdata]);

    useEffect(() => {
        if (downloadFlag == true) {
            props.getNewModels();
            props.getDiscountModels();
        }
        setDownloadFlag(false);
    }, [downloadFlag]);

    let newElements = newModels.map( n => <Itemcard id={n.id_model} itemname={n.name} price={n.price + ' руб.'} discount={n.discount} img={'data:image/jpg;base64,' + btoa(Array.from(new Uint8Array(n.image.data)).map(b => String.fromCharCode(b)).join(''))} /> );
    let discountElements = discountModels.map( d => <Itemcard id={d.id_model} itemname={d.name} price={d.price + ' руб.'}  discount={d.discount} img={'data:image/jpg;base64,' + btoa(Array.from(new Uint8Array(d.image.data)).map(b => String.fromCharCode(b)).join(''))} /> );

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

const mapStateToProps = (state) => state;
const mapDispatchToProps = {getNewModels, getDiscountModels}

export default connect(mapStateToProps, mapDispatchToProps)(Startpage);