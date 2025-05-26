import CounterButton from "./CounterButton.tsx";
import {useCounter} from "../hooks/useCounter.ts";

const CounterWithCustomHook = () => {

    // custom hook function
    const {count, increase, decrease, reset} = useCounter();


    return (
        <>
            <div className="space-y-8 pt-12 pb-12">
                <h1 className="text-center">Count is {count}</h1>
                <div className="text-center space-x-4">
                    <CounterButton onClick={increase} label={"Increase"}/>
                    <CounterButton onClick={decrease} disabled={count === 0} label={"Decrease"}/>
                    <CounterButton onClick={reset} disabled={count === 0} label={"Reset"}
                                   addClass="bg-cf-dark-red"/>
                </div>
            </div>
            {/*<p className="text-center pt-4">Last change*/}
            {/*    performed: <strong>{state.lastAction || "None"}</strong> at <strong>{state.time}</strong></p>*/}
        </>
    )
}

export default CounterWithCustomHook;