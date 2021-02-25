import React, { useState } from 'react';

import css from './Colorprobe.module.css';

function Colorprobe(props) {
    const [checked, setChecked] = useState(false);
    if (checked) {
        props.updateFilter(props.color);
    }else{
        props.updateFilter('');
    }
    return(
        <label className={css.container}>
            <input className={css.checkbox} type="checkbox" name={props.name} value={props.color} onChange={() => {setChecked(!checked)}}/>
            <span className={css.checkmark} style={{backgroundColor: props.color}}></span>
        </label>
    );
}

export default Colorprobe;