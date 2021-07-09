import React, { useState } from "react"
let counter = 2;
export function Counter() {
    const { counter, setCounter } = useState({})

    function handleCounter() {
        console.l
        setCounter(counter + 1)
    }
    return (
        <div>
            <h1>{counter}</h1>
            <button type="button" onClick={handleCounter}>
                Increment
                </button>
        </div>
    )
}