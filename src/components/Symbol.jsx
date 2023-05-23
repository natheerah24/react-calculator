import propTypes from 'prop-types';
const Symbol = (props) => {
    return (
        <symbol className={"bg-gray-500 font-bold text-white rounded-full px-10 py-5 hover:bg-gray-400"}>{props.symbolLabel}</symbol>
    )
}
Symbol.propTypes = {
    symbolLabel: propTypes.string
}
export default Symbol;