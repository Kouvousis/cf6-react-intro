import CounterButton from "./CounterButton.tsx";
import {useCounterWithReducer} from "../hooks/useCounterWithReducer.ts";

const CounterWithReducer = () => {

    const {count, lastAction, time, increase, decrease, reset} = useCounterWithReducer();


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
            <p className="text-center pt-4">Last change
                performed: <strong>{lastAction || "None"}</strong> at <strong>{time}</strong></p>
        </>
    )
}

export default CounterWithReducer;