import React, { useState } from 'react';

import css from './Groupposition.module.css';

function Groupposition(props) {
    let styleObj = {}
    if (props.caption == props.active) {
        styleObj = {
            fontWeight: 500
        }
    }
    return(
        <p className={css.groupposition} style={styleObj} onClick={() => {props.onClick(props.caption)}}>{props.caption}</p>
    );
}

export default Groupposition;