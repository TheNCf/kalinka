import React from 'react';

import css from './Checkbox.module.css';

function Checkbox(props){
    return(
        <label className={css.container}>
            <input className={css.checkbox} type="checkbox" name={props.name} value={props.value} /> 
            <span className={css.checkmark}></span> {props.caption}
        </label>
    );
}

export default Checkbox;