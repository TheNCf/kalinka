import React from 'react';

import css from './Createorder.module.css';

import Textinput from '../UI Elements/Textinput/Textinput';
import Menubutton from '../UI Elements/Menubutton/Menubutton';

function Createorder(params) {
    return(
        <div className="container">
            <h1>Оформление заказа</h1>
            <div className={css.form}>
                <form action="#" method="POST">
                    <h1 className={css.label} style={{marginTop: '0px'}}>Ваш номер телефона:</h1>
                    <div className={css.element}><Textinput mask="+375(99)-999-99-99" name="phone" maskchar="_" /></div>
                    <h1 className={css.label}>Ваше имя:</h1>
                    <div className={css.element}><Textinput name="name" placeholder="Ваше имя..." /></div>
                    <h1 className={css.label}>Укажите удобное время для звонка:</h1>
                    <div className={css.element}><Textinput mask="с 99:99 до 99:99" name="time" maskchar=" " /></div>
                    <div className={css.button}><Menubutton caption="Подтвердить" type="submit" name="submit" /></div>
                </form>
            </div>
        </div>
    );
}

export default Createorder;