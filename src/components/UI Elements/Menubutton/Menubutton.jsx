import React from 'react';

import css from './Menubutton.module.css';

function Menubutton(props) {
    var image;
    if(props.img != null){
        image = (
            <img className={css.image} src={props.img} alt="Cart"/>
        );
    }

    const empty = () => {
        let x;
    }

    let cssButton = css.menubutton;
    let onClck = props.onClick;
    if (props.disabled == "disabled") { 
        cssButton = css.menubuttondisabled;
        onClck = empty;
    }
    if (props.onClick == "") {
        onClck = empty;
    }
    return(
        <div className={cssButton} onClick={() => {onClck(props.caption)}} >
            {image}
            <p className={css.caption} style={{fontSize: props.fontsize}}>{props.caption}</p>
        </div>
    );
}

export default Menubutton;