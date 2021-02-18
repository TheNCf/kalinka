import React from 'react';

import css from './Cartitem.module.css';

import Circlebutton from "../Circlebutton/Circlebutton";
import Menubutton from "../Menubutton/Menubutton";

import plus from "./../../../img/Plus.png";
import minus from "./../../../img/Minus.png";

function Cartitem(props) {
    return(
        <div className={css.cartitem}>
            <div className={css.imagecontainer}>
                <img className={css.image} src={props.img} alt={props.alt}/>
            </div>
            <div className={css.description}>
                <div className={css.contentline}>
                    <p className={css.text}>{props.itemname}</p>
                    <p className={css.price}>{props.price} руб.</p>
                </div>
                <div className={css.contentline}>
                    <p className={css.text}>Цвет:</p>
                    <div className={css.group}>
                        {props.colors}
                    </div>
                    <div className={css.toright}>
                        <Circlebutton img={minus} margin="0px" size="35px" imgsize="50%" />
                        <p className={css.text} style={{fontSize: '32px', margin: '0px 15px'}}>1</p>
                        <Circlebutton img={plus} margin="0px" size="35px" imgsize="50%" />
                    </div>
                </div>
                <div className={css.contentline} style={{alignItems: 'initial'}}>
                    <p className={css.text}>Размер:</p>
                    <div className={css.group} style={{marginRight: '100px'}}>
                        {props.radios}
                    </div>
                </div>
                <div className={css.space}></div>
                <div className={css.toright} style={{bottom: '10px', right: '20px', position: 'absolute'}}>
                    <Menubutton caption="Удалить" fontsize="26px"/>
                </div>
            </div>
        </div>
    );
}

export default Cartitem;