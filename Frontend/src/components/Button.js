import PropTypes from 'prop-types'
import { useState } from "react";
import { ViewPropTypes } from 'react-native';
// goal make the second button appear, and the button already has its own function of going next
const Button=({onClick,text,})=>{
    return(
        <div>
        <button onClick={onClick}>{text}</button>
        </div>
    )
}
Button.defaultProps={
    text:"hello",
    appearance:"visible"
}
Button.propTypes={
    onClick: PropTypes.func,
    text: PropTypes.string,
    

}
export default Button