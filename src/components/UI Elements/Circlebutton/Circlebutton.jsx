import React from 'react';

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

    return (
        <div className={css.circlebutton} style={styleObj} onClick={() => {props.onClick(props.value)}}>
            {image}
            {text}
        </div>
    );
}

export default Ciclebutton;