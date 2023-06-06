import Display from './components/Display.jsx';
import { Button } from './components/Button.jsx';
import { CalculatorProvider } from './contexts/Calculator.jsx';
import { CalculatorHistory } from './components/CalculatorHistory.jsx';
import {createPortal} from "react-dom";

const calculatorHistory = document.getElementById('calculatorHistory');

function App() {
    return (
        <div className={"container max-w-sm mx-auto static mt-20"}>
            <div className={"w-full rounded-lg bg-black shadow-2xl p-2 my-2 shadow-slate-950 "}>
                <CalculatorProvider>
                    <Display/>
                    <div className={"grid grid-cols-4 gap-2 mt-3 text-center"}>
                        <Button buttonLabel={"AC"} className={"px-2"} style={"gray"}/>
                        <Button buttonLabel={"%"} style={"gray"}/>
                        <Button buttonLabel={"÷"} style={"gray"}/>
                        <Button buttonLabel={"×"} style={"amber"}/>

                    </div>
                    <div className={"grid grid-cols-4"}>
                        <div className={"w-full grid grid-cols-4 col-span-4 gap-2 mt-3"}>
                            <Button buttonLabel={"7"}/>
                            <Button buttonLabel={"8"}/>
                            <Button buttonLabel={"9"}/>
                            <Button buttonLabel={"-"} style={"amber"}/>
                            <Button buttonLabel={"4"}/>
                            <Button buttonLabel={"5"}/>
                            <Button buttonLabel={"6"}/>
                            <Button buttonLabel={"+"} style={"amber"}/>
                            <Button buttonLabel={"1"}/>
                            <Button buttonLabel={"2"}/>
                            <Button buttonLabel={"3"}/>
                            <Button buttonLabel={"="} className={"row-span-2 px-2"} style={"amber"}/>
                            <Button buttonLabel={"0"} className={"col-span-2"}/>
                            <Button buttonLabel={"."} style={"amber"}/>
                        </div>
                        {createPortal(
                            <CalculatorHistory/>,
                            calculatorHistory
                        )}
                    </div>
                </CalculatorProvider>
            </div>
        </div>
    );
}

export default App;