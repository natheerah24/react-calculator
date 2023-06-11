import React from 'react';
import {useCalculator, useCalculatorDispatch} from '../contexts/Calculator.jsx';

export function CalculatorHistory() {
    const calculatorDispatch = useCalculatorDispatch();

    const handleButton = (input) => {
        if (input === 'clearHistory') {
            calculatorDispatch({type: 'clearHistory'});
        }
    }
    const calculator = useCalculator();
    return (
        <div>
            <div
                className="bg-black rounded-lg m-5 text-white text-center p-7 border-2 border-white font-display w-60 absolute">
                <h2>History</h2>
                {calculator.history.map((item, index) => (
                    <div key={index}>{item.cal}</div>
                ))}
            </div>
            <button onClick={() => {
                handleButton('clearHistory')
            }}>Clear History
            </button>
        </div>
    );
}