import PropTypes from 'prop-types';
import {useCalculatorDispatch} from "../contexts/Calculator.jsx";

const buttonStyles = {
    normal: 'bg-slate-500 rounded-md hover:bg-slate-600 ease-in duration-300',
    zinc: 'bg-zinc-800 hover:bg-zinc-700',
    amber: 'bg-amber-500 hover:bg-white hover:text-amber-500',
    gray: 'bg-gray-500 hover:bg-gray-400'
};

export function Button(props) {
    const calculatorDispatch = useCalculatorDispatch();

    const handleButton = (input) => {
        if (input === 'AC') {
            calculatorDispatch({type: 'clear'});
            return;
        }
        if (input === '=') {
            calculatorDispatch({type: 'evaluate'});
            return;
        }
        if (input === '×') {
            input = '*';
        }
        if (input === '÷') {
            input = '/';
        }
        calculatorDispatch({type: 'input', input});
    };

    return (
        <button
            onClick={() => handleButton(props.buttonLabel)}
            className={`rounded-full px-10 py-5 font-bold text-white text-center ${buttonStyles[props.style || 'zinc']} ${props.className}`}
        >
            {props.buttonLabel}
        </button>
    );
}

Button.propTypes = {
    buttonLabel: PropTypes.string,
    style: PropTypes.string,
    className: PropTypes.string,
};
