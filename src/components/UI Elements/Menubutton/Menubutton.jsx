import React from 'react';

import css from './Menubutton.module.css';

import {NavLink} from 'react-router-dom';

function Menubutton(props) {
    var image;
    if(props.img != null){
        image = (
            <img className={css.image} src={props.img} alt="Cart"/>
        );
    }
    return(
        <a className={css.link} type={props.type} name={props.name}>
            <div className={css.menubutton}>
                {image}
                <p className={css.caption} style={{fontSize: props.fontsize}}>{props.caption}</p>
            </div>
        </a>
    );
}

export default Menubutton;