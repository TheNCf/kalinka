import React from 'react';

import css from './Groupheader.module.css';

function Groupheader(props) {
    let styleObj = {}
    if ('' == props.active) {
        styleObj = {
            fontWeight: 500
        }
    } else {
        styleObj = {
            fontWeight: 300
        }
    }
    return(
        <h1 className={css.groupheader} style={styleObj} onClick={() => {props.onClick('')}}>{props.caption}</h1>
    );
}

export default Groupheader;