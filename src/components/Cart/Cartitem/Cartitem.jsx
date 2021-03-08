import React from 'react';
import Cookies from 'universal-cookie';

import css from './Cartitem.module.css';

import Circlebutton from "../../UI Elements/Circlebutton/Circlebutton";
import Menubutton from "../../UI Elements/Menubutton/Menubutton";

import plus from "./../../../img/Plus.png";
import minus from "./../../../img/Minus.png";

function Cartitem(props) {
    const cookies = new Cookies();
    const onClick = () => {
        cookies.remove(props.id);
        props.reload();
        console.log('deleteing: ' + props.id)
    }

    return(
        <div className={css.cartitem}>
            <div className={css.description}>
                <div className={css.contentline}>
                    <p className={css.text}>{props.itemname}</p>
                    <p className={css.price}>{props.price} руб.</p>
                </div>
                <div className={css.contentline}>
                    <p className={css.text}>Цвет:</p>
                    <div className={css.colorprobe} style={{backgroundColor: props.color}}></div>
                </div>
                <div className={css.contentline} style={{alignItems: 'initial'}}>
                    <p className={css.text}>Размер: {props.size}</p>
                </div>
                <div className={css.contentline} style={{alignItems: 'initial'}}>
                    <p className={css.text}>Количество: {props.quantity}</p>
                </div>
                <div className={css.toright} style={{bottom: '10px', right: '20px', position: 'absolute'}}>
                    <Menubutton caption="Удалить" fontsize="26px" onClick={onClick} />
                </div>
            </div>
        </div>
    );
}

export default Cartitem;