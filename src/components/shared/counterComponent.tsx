import React from "react";

interface CounterComponentProps {
    count: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

const CounterComponent: React.FC<CounterComponentProps> = ({ count, onIncrement, onDecrement }) => {
    return (
        <div className="flex items-center gap-4">
            <button
                onClick={onDecrement}
                disabled={count === 0}
                className={`px-4 py-2 bg-red-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed`}
            >
                -
            </button>
            <span className="text-xl font-bold">{count}</span>
            <button
                onClick={onIncrement}   
                className="px-4 py-2 bg-green-500 text-white rounded"
            >
                +
            </button>
        </div>
    );
};

export default CounterComponent;
