import propTypes from 'prop-types';
const Number = (props) => {
    return (
        <number className={"bg-zinc-800 font-bold text-white rounded-full px-10 py-5 hover:bg-zinc-700"}>{props.numberLabel}</number>
    )
}
Number.propTypes = {
    numberLabel: propTypes.string
}
export default Number;