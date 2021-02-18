import React from 'react';
import InputMask from 'react-input-mask';

import css from './Textinput.module.css';

class Textinput extends React.Component {
    render() {
        return <InputMask {...this.props} mask={this.props.mask} maskChar={this.props.maskchar} alwaysShowMask="false" type="text" className={css.input} name={this.props.name} placeholder={this.props.placeholder} />;
    }
}

export default Textinput;