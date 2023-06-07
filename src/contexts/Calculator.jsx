import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { evaluate } from 'mathjs';
import PropTypes from 'prop-types';

const CalculatorContext = createContext();
const CalculatorDispatch = createContext();

const initialCalculator = {
    history: [],
    evaluationString: '',
    result: 0,
};

const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const operator = ['+', '-', '*', '/', '.', '%'];

export function CalculatorProvider({ children }) {
    const [state, dispatch] = useReducer(calculatorReducer, initialCalculator);

    function handleKeyEvent(e) {
        if (number.includes(e.key) || operator.includes(e.key)) {
            dispatch({
                type: 'input',
                input: e.key,
            });
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyEvent);

        return () => {
            document.removeEventListener('keydown', handleKeyEvent);
        };
    }, []);

    return (
        <CalculatorContext.Provider value={state}>
            <CalculatorDispatch.Provider value={dispatch}>
                {children}
            </CalculatorDispatch.Provider>
        </CalculatorContext.Provider>
    );
}

CalculatorProvider.propTypes = {
    children: PropTypes.node,
};

export function useCalculator() {
    return useContext(CalculatorContext);
}

export function useCalculatorDispatch() {
    return useContext(CalculatorDispatch);
}

function calculatorReducer(state, action) {
    switch (action.type) {
        case 'input':
            return {
                ...state,
                evaluationString: `${state.evaluationString}${action.input}`,
            };
        case 'clear':
            return {
                ...state,
                evaluationString: '',
                result: 0,
            };
        case 'evaluate': {
            const { evaluationString } = state;
            const result = evaluate(evaluationString);
            const cal = `${evaluationString} = ${result}`;

            return {
                ...state,
                evaluationString: `${result}`,
                result,
                history: [...state.history, { cal }],
            };
        }
        default:
            throw new Error('Unknown action: ' + action.type);
    }
}
