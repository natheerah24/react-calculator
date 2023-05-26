import {useCalculator} from "../contexts/Calculator.jsx";

const Display = () => {
    const calculator = useCalculator();
    return (
        <div className={"bg-black rounded-lg m-5 text-white text-right p-7 border-2 border-white font-display"}>
            <span className={`font-mono text-4xl ${!calculator.evaluationString && !calculator.result ? 'animate-blink' : ''}`}>{calculator.evaluationString || calculator.result}</span>
        </div>
    )
}
export default Display;