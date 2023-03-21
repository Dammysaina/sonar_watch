/* eslint-disable react/prop-types */
import React from 'react';
import AppButton from './appbutton.js';
import PropTypes from 'prop-types';

const Buttonapp = (props) => {
    return (
        // eslint-disable-next-line react/prop-types
        <AppButton buttonColor={props.buttonColor} buttonWidth={props.buttonWidth} buttonHeight={props.buttonHeight} textColor={props.textColor}>
            {props.children}
        </AppButton>
    )
};

AppButton.propTypes = {
    buttonColor: PropTypes.string,
    buttonWidth: PropTypes.string,
    buttonHeight: PropTypes.string
}

export default Buttonapp;