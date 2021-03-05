import React from 'react';
import { NavLink } from 'react-router-dom';

import css from './Itemcard.module.css';

function Itemcard(props) {
    let discount = "";
    let discountText = parseFloat(props.price).toFixed(2) + ' руб.';

    if (props.discount > "0"){
        discount = (
            <div className={css.discount}>
                <h2 className={css.discounttext}>
                    -{props.discount}%
                </h2>
            </div>
        );
        let price = parseFloat(props.price.slice(0, props.price.length - 4)).toFixed(2);
        let newPrice = (price - price * parseFloat(props.discount) / 100).toFixed(2);
        discountText = (
            <div>
                <strike>{price}</strike> {newPrice} руб.
            </div>);
    }
    return (
        <NavLink to={'/item/id' + props.id}>
            <div className={css.itemcard} style={{margin: props.margin}}>
                <div className={css.itemimg}>
                    {discount}
                    <img className={css.image} src={props.img} alt="itemimg" />
                </div>
                <h2>{props.itemname}</h2>
                <h2 className={css.price}>{discountText}</h2>
            </div>
        </NavLink>
    );
}

export default Itemcard;