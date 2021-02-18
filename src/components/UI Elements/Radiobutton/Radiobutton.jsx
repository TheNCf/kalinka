import React from 'react';

import css from './Radiobutton.module.css';

function Radiobutton(props) {
    var noncaption;
    var caption;
    if(props.caption == null){
        noncaption = (
            <label className={css.container}>
                <input className={css.checkbox} type="radio" name={props.name} value={props.color} />
                <span className={css.checkmark} style={{backgroundColor: props.color}}></span>
            </label>
        );
    }
    else{
        caption = (
            <label className={css.radiocontainer}>
                <input className={css.radio} type="radio" name={props.name} value={props.caption} />
                <span className={css.caption} style={{color: props.fontcolor}}>{props.caption}</span>
                <span className={css.radiomark} id={props.name + "id"}>
                    
                </span>
            </label>
        );
    }
    //var width = document.getElementById(props.name + "id").clientWidth;
    return(
        <div>
            {noncaption}
            {caption}
        </div>
    );
}

export default Radiobutton;