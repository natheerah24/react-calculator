import React from 'react';
import {useCalculator} from '../contexts/Calculator.jsx';

export function CalculatorHistory() {
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
        </div>
    );
}