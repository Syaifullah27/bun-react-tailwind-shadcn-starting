import { Card, CardContent } from "@/components/ui/card";
import { APITester } from "./APITester";
import "@/public/styles/globals.css";

import logo from "@/public/images/logo.svg";
import reactLogo from "@/public/images/react.svg";
import CounterComponent from "./components/shared/counterComponent";
import React, { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => {
    if (count > 0) setCount(count - 1);
  };
  const handleReset = () => setCount(0);

  return (
    <div className="container mx-auto p-8 text-center relative z-10">
      <div className="flex justify-center items-center gap-8 mb-8">
        <img
          src={logo}
          alt="Bun Logo"
          className="h-36 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa] scale-120"
        />
        <img
          src={reactLogo}
          alt="React Logo"
          className="h-36 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] [animation:spin_20s_linear_infinite]"
        />
      </div>

      <Card className="bg-card/50 backdrop-blur-sm border-muted">
        <CardContent className="pt-6">
          <h1 className="text-5xl font-bold my-4 leading-tight">Bun + React</h1>
          <p>
            Edit{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">src/App.tsx</code> and
            save to test HMR
          </p>
          <APITester />
        </CardContent>
      </Card>

      <CounterComponent
        count={count}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
      <button
        onClick={handleReset}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        disabled={count === 0}
      >
        Reset Counter
      </button>
    </div>
  );
}

export default App;
