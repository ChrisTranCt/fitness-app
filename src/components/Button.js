import PropTypes from 'prop-types'
const Button=({onClick})=>{
    return(
        <button onClick={onClick}>Search</button>
    )
}
Button.propTypes={
    onClick: PropTypes.func,
}
export default Button