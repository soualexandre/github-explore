import React, { useState } from "react"
let counter = 0;

export function Counter() {
    const [counter] = useState()

    function handleCounter() {
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