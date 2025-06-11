import {useRef} from "react";

const UncontrolledInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        alert(`Value: ${inputRef.current?.value}`);
    }
    return (
        <>
            <div className="text-center mt-8 space-x-4">
                <input
                    ref={inputRef}
                    type="text"
                    className="border rounded px-4 py-2"
                />
                <button
                    className="bg-cf-dark-gray text-white px-4 py-2 rounded"
                    type="submit"
                    onClick={handleClick}
                >
                    Show Value
                </button>
            </div>
        </>
    )
}

export default UncontrolledInput