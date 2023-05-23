import Display from "./components/Display.jsx";
import Number from "./components/Number.jsx";
import Symbol from "./components/Symbol.jsx";
import Sign from "./components/Sign.jsx";
import {CalculatorProvider} from "./contexts/Calculator.jsx";

function App() {
    return (
        <div className={"container max-w-sm mx-auto mt-28  "}>
            <div className={"w-full rounded-lg bg-black shadow-2xl p-2 my-2 shadow-slate-950 "}>
                <CalculatorProvider>
                    <Display/>
                    <div className={"grid grid-cols-4 gap-2 mt-3 text-center"}>
                        <Symbol symbolLabel={"AC"}/>
                        <Symbol symbolLabel={"%"}/>
                        <Symbol symbolLabel={"÷"}/>
                        <Sign signLabel={"×"}/>

                    </div>
                    <div className={"grid grid-cols-4"}>
                        <div className={"w-full grid grid-cols-4 col-span-4 gap-2 mt-3"}>
                            <Number numberLabel={"7"}/>
                            <Number numberLabel={"8"}/>
                            <Number numberLabel={"9"}/>
                            <Sign signLabel={"-"} style={"operator"}/>
                            <Number numberLabel={"4"}/>
                            <Number numberLabel={"5"}/>
                            <Number numberLabel={"6"}/>
                            <Sign signLabel={"+"}/>
                            <Number numberLabel={"1"}/>
                            <Number numberLabel={"2"}/>
                            <Number numberLabel={"3"}/>
                            <Sign signLabel={","}/>
                        </div>
                        <div className={"w-full grid grid-cols-2 col-span-4 gap-2 mt-3 text-center"}>
                            <Number numberLabel={"0"}/>
                            <Sign signLabel={"="}/>
                        </div>
                    </div>
                </CalculatorProvider>
            </div>
        </div>
    )
}

export default App
