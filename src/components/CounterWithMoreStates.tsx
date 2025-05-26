import {useState} from "react";
import CounterButton from "./CounterButton.tsx";

const CounterWithMoreStates = () => {
    const [count, setCount] = useState(0);
    const [lastAction, setLastAction] = useState("");
    const [time, setTime] = useState("");

    const getCurrentTime = () => new Date().toLocaleTimeString();

    const increaseCount = () => {
        setCount(count + 1);
        setLastAction("Increased");
        setTime(getCurrentTime());
    }

    const decreaseCount = () => {
        if (count > 0) {
            setCount(count - 1);
            setLastAction("Decreased");
            setTime(getCurrentTime());
        }
    }

    const resetCount = () => {
        setCount(0);
        setLastAction("Reset");
        setTime(getCurrentTime());
    }

    return (
        <>
            <div className="space-y-8 pt-12 pb-12">
                <h1 className="text-center">Count is {count}</h1>
                <div className="text-center space-x-4">
                    <CounterButton onClick={increaseCount} label={"Increase"}/>
                    <CounterButton onClick={decreaseCount} disabled={count === 0} label={"Decrease"}/>
                    <CounterButton onClick={resetCount} disabled={count === 0} label={"Reset"}
                                   addClass="bg-cf-dark-red"/>
                </div>
            </div>
            <p className="text-center pt-4">Last change performed: <strong>{lastAction || "None"}</strong> at <strong>{time}</strong> </p>
        </>
    )
}

export default CounterWithMoreStates