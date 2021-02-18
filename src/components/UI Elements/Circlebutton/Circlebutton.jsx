import React, { useState } from 'react';

import css from './Circlebutton.module.css';

function Ciclebutton(props) {
    var image = "";
    if (props.img != null){
        image = (
            <img className={css.image} src={props.img} alt={props.alt} style={{width: props.imgsize, height: props.imgsize}}/>
        );
    }
    var text = "";
    if (props.caption != null){
        text = (
            <p className={css.caption}>{props.caption}</p>
        );
    }

    var styleObj = {
        backgroundColor: props.color,
        margin: props.margin,
        height: props.size,
        width: props.size
    }

    const [value, setValue] = useState(props.value);

    return (
        <button className={css.circlebutton} style={styleObj} value={props.value} onClick={() => {props.onClick(props.value)}}>
            {image}
            {text}
        </button>
    );
}

export default Ciclebutton;