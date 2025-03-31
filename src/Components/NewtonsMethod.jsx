import React, { useState } from "react";
import "./NewtonsMethod.css";

const NewtonsMethod = () => {
    const [guess, setGuess] = useState("");
    const [result, setResult] = useState("");

    const approximation = (guess) => {
        const a = Math.pow(guess, 4);
        const b = Math.pow(guess, 3);
        const c = Math.pow(guess, 2);
        const fxn = 6 * a - 13 * b - 18 * c + 7 * guess + 6;
        const fxnPrime = 24 * b - 39 * c - 36 * guess + 7;
        return guess - fxn / fxnPrime;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let currentGuess = parseFloat(guess);
        let newResult = currentGuess;
        let nextResult = approximation(newResult);


        while (Math.abs(nextResult - newResult) > 0.001) {
            newResult = nextResult;
            nextResult = approximation(newResult);
            nextResult = Math.round(nextResult * 1000) / 1000;
        }

        setResult(nextResult);
    };

    return (
        <form id="newton-form" onSubmit={handleSubmit}>
            <label>Newtons Method</label>
            <br />

            <label>Root Guess</label>
            <input type="number" name="root-guess" id="root-guess" step="0.001" value={guess} onChange={(e) => setGuess(e.target.value)} required/>
            <br />
            <label>Root Approximation</label>
            <input type="number" name="root-result" id="root-result" value={result} readOnly/>
            <br />
            <input type="submit" value="Calculate" />
        </form>
    );
};

export default NewtonsMethod;
