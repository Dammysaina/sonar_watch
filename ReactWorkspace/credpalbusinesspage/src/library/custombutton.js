/* eslint-disable react/prop-types */
import React from 'react';
import Button from './button_styles';
import PropTypes from 'prop-types';

const CustomButton = (props) => {
    return (
        // eslint-disable-next-line react/prop-types
        <Button buttonWidth={props.buttonWidth} buttonHeight={props.buttonHeight} textColor={props.textColor}>
            {props.children}
        </Button>
    )
};

Button.propTypes = {
   
    buttonWidth: PropTypes.string,
    buttonHeight: PropTypes.string
}

export default CustomButton;