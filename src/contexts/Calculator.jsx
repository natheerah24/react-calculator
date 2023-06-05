import React, { createContext, useContext, useReducer } from 'react';
import { evaluate } from 'mathjs';
import PropTypes from 'prop-types';
// import { CalculatorHistory } from '../components/CalculatorHistory.jsx';

const CalculatorContext = createContext();
const CalculatorDispatch = createContext();

const initialCalculator = {
    history: [],
    evaluationString: '',
    result: 0,
};

export function CalculatorProvider({ children }) {
    const [state, dispatch] = useReducer(calculatorReducer, initialCalculator);

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

            return {
                ...state,
                evaluationString: '',
                result: evaluate(state.evaluationString),
                history: [
                    ...state.history,
                    {
                        cal: `${state.evaluationString} = ${evaluate(state.evaluationString)}`,
                    },
                ],
            };
        }
        default:
            throw new Error('Unknown action: ' + action.type);
    }
}