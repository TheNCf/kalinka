import React, { useState } from 'react';
import axios from 'axios';

import css from './Createorder.module.css';

import Textinput from '../UI Elements/Textinput/Textinput';
import Menubutton from '../UI Elements/Menubutton/Menubutton';

function Createorder(params) {
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [period, setPeriod] = useState('');

    const onClick = () => {
        axios.post("/addClientInfo", {
            orderNumber: `${number + name + period}`,
            number: number,
            firstName: name,
            period: period
        }); 
        alert("Заказ принят");
    }

    const changeHandler = (e) => {
        const name = e.target.name;
        switch (name) {
            case 'phone':
                setNumber(e.target.value);
                break;

            case 'name':
                setName(e.target.value);
                break;

            case 'time':
                setPeriod(e.target.value);
                break;
        
            default:
                break;
        }
    }

    return(
        <div className="container">
            <h1>Оформление заказа</h1>
            <div className={css.form}>
                <form action="#" method="POST">
                    <h1 className={css.label} style={{marginTop: '0px'}}>Ваш номер телефона:</h1>
                    <div className={css.element}><Textinput mask="+375(99)-999-99-99" name="phone" maskchar="_" onChange={changeHandler} /></div>
                    <h1 className={css.label}>Ваше имя:</h1>
                    <div className={css.element}><Textinput name="name" placeholder="Ваше имя..." onChange={changeHandler} /></div>
                    <h1 className={css.label}>Укажите удобное время для звонка:</h1>
                    <div className={css.element}><Textinput mask="с 99:99 до 99:99" name="time" maskchar=" " onChange={changeHandler} /></div>
                    <div className={css.button}><Menubutton caption="Подтвердить" type="submit" name="submit" onClick={onClick} /></div>
                </form>
            </div>
        </div>
    );
}

export default Createorder;