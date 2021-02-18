import React from 'react';

import css from './Itemdescription.module.css';

import Circlebutton from '../UI Elements/Circlebutton/Circlebutton';
import Menubutton from '../UI Elements/Menubutton/Menubutton'

import plus from "./../../img/Plus.png";
import minus from "./../../img/Minus.png";
import cart from './../../img/cart.png';

function Itemdescription(props) {
    return(
        <div className="container">
            <h1>{props.itemname}</h1>
            <div className={css.information}>
                <div className={css.images}>
                    <div className={css.imagecontainer}>
                        <img className={css.image} src={props.img} alt={props.alt} />
                    </div>
                    <div className={css.imagegroup}>
                        <div className={css.smallimage} style={{margin: '0px'}}><img className={css.image} src={props.img} alt={props.alt} /></div>
                        <div className={css.smallimage}><img className={css.image} src={props.img} alt={props.alt} /></div>
                        <div className={css.smallimage}><img className={css.image} src={props.img} alt={props.alt} /></div>
                    </div>
                </div>
                <div className={css.description}>
                    <div className={css.price}>
                        <h1 style={{marginLeft: 'auto'}}>{props.price} руб.</h1>
                    </div>
                    <h1 className={css.maintext}>Выберите цвет: </h1>
                    {props.radiocolors}
                    <h1 className={css.maintext}>Выберите размер: </h1>
                    {props.sizes}
                    <h1 className={css.maintext}>Количество: </h1>
                    <div className={css.group}>
                        <Circlebutton img={minus} margin="0px" size="35px" imgsize="50%" />
                        <h1 className={css.maintext} style={{margin: '0px 15px'}}>1</h1>
                        <Circlebutton img={plus} margin="0px" size="35px" imgsize="50%" />
                    </div>
                    <div className={css.space}></div>
                    <div className={css.button}><Menubutton caption="Добавить в корзину" fontsize="26px" img={cart} /></div>
                </div>
            </div>
        </div>
    );
}
export default Itemdescription;