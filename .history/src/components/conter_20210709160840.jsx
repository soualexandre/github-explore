import React, { useState } from "react"
let counter = 0;

export function Counter() {

    function handleCounter() {
        console.log('isso funcona');
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