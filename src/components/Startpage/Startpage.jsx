import React, { useState, useEffect } from 'react';

import css from './Startpage.module.css';

import Itemcard from '../UI Elements/Itemcard/Itemcard';

import { connect } from 'react-redux';
import { getNewModels, getDiscountModels } from '../../Redux/action';

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