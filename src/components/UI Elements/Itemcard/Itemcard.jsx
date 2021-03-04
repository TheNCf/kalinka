import React from 'react';
import { NavLink } from 'react-router-dom';

import css from './Itemcard.module.css';

function Itemcard(props) {
    var discount = "";
    if (props.discount > "0"){
        discount = (
            <div className={css.discount}>
                <h2 className={css.discounttext}>
                    -{props.discount}%
                </h2>
            </div>
        );
    }
    return (
        <NavLink to={'/item/id' + props.id}>
            <div className={css.itemcard} style={{margin: props.margin}}>
                <div className={css.itemimg}>
                    {discount}
                    <img className={css.image} src={props.img} alt="itemimg" />
                </div>
                <h2>{props.itemname}</h2>
                <h2 className={css.price}>{props.price}</h2>
            </div>
        </NavLink>
    );
}

export default Itemcard;