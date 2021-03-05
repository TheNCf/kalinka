import React from 'react';

import css from './Menubutton.module.css';

function Menubutton(props) {
    var image;
    if(props.img != null){
        image = (
            <img className={css.image} src={props.img} alt="Cart"/>
        );
    }
    return(
        <div className={css.menubutton} onClick={() => {props.onClick(props.caption)}} >
            {image}
            <p className={css.caption} style={{fontSize: props.fontsize}}>{props.caption}</p>
        </div>
    );
}

export default Menubutton;