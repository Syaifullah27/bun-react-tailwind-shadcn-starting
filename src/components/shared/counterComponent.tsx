import React, { useState } from "react";

const CounterComponent: React.FC = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => {
        if (count > 0) setCount(count - 1);
    };

    return (
        <div className="flex items-center gap-4">
            <button
                onClick={handleDecrement}
                disabled={count === 0}
                className={`px-4 py-2 bg-red-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed`}
            >
                -
            </button>
            <span className="text-xl font-bold">{count}</span>
            <button
                onClick={handleIncrement}
                className="px-4 py-2 bg-green-500 text-white rounded"
            >
                +
            </button>
        </div>
    );
};

export default CounterComponent;
