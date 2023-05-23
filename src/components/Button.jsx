import propTypes from 'prop-types';

const buttonStyles = {
    normal: 'bg-slate-500 rounded-md hover:bg-slate-600 ease-in duration-300',
    zinc: 'bg-zinc-800 hover:bg-zinc-700',
    amber: 'bg-amber-500 hover:bg-white hover:text-amber-500',
    gray: 'bg-gray-500 hover:bg-gray-400'
}
export function Button (props) {
    return (
        <button
            className={`rounded-full px-10 py-5 font-bold text-white text-center ${buttonStyles[props.style || 'zinc']} ${props.className}`}>{props.buttonLabel}
        </button>
    )
}
Button.propTypes = {
    buttonLabel: propTypes.string,
    style: propTypes.string,
    className: propTypes.string,
}