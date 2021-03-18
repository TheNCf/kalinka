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

    const empty = (value) => {
        let x = value;
    }

    let cssButton = css.circlebutton;
    let onClck = props.onClick;
    if (props.disabled == "disabled") {
        cssButton = css.circlebuttondisabled;
        onClck = empty;
    }

    return (
        <div className={cssButton} style={styleObj} onClick={() => {onClck(props.value)}} data-title="Выберите размер и цвет товара" >
            {image}
            {text}
        </div>
    );
}

export default Ciclebutton;