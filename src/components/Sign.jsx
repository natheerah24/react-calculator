import propTypes from 'prop-types';

const Sign = (props) => {
    return (
        <sign
            className={"bg-amber-500 font-bold text-white rounded-full px-10 py-5 hover:bg-white hover:text-amber-500"}>{props.signLabel}</sign>
    )
}
Sign.propTypes = {
    signLabel: propTypes.string
}
export default Sign;