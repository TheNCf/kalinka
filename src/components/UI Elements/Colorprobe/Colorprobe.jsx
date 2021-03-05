import React from 'react';

import css from './Colorprobe.module.css';

function Colorprobe(props) {
    return(
        <label className={css.container}>
            <input className={css.checkbox} type="checkbox" name={props.name} value={props.color} onChange={(e) => {props.onChange(e)}}/>
            <span className={css.checkmark} style={{backgroundColor: props.color}}></span>
        </label>
    );
}

export default Colorprobe;