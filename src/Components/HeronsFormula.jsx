import React, { useState } from "react";
import "./HeronsFormula.css";

const HeronsFormula = () => {
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [c, setC] = useState("");
    const [result, setResult] = useState("");

    const heron = (a, b, c) => {
        return (
            (1 / 4) *
            Math.sqrt(4 * a * a * b * b - Math.pow(a * a + b * b - c * c, 2))
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (a < 0 || b < 0 || c < 0) {
            alert("Do not use negative numbers");
            return;
        }

        const calculation = heron(parseFloat(a), parseFloat(b), parseFloat(c));
        setResult(calculation);
    };

    return (
        <form id="heron-form" onSubmit={handleSubmit}>
            <label>Heron's Formula</label>
            <br />
            <label>Side A</label>
            <input type="number" name="heron-a" value={a} onChange={(e) => setA(e.target.value)} step="0.001" required />
            <br />
            <label>Side B</label>
            <input type="number" name="heron-b" value={b} onChange={(e) => setB(e.target.value)} step="0.001" required />
            <br />
            <label>Side C</label>
            <input type="number" name="heron-c" value={c} onChange={(e) => setC(e.target.value)} step="0.001" required />
            <br />
            <label>Result</label>
            <input type="text" name="heron-result" value={result} readOnly />
            <br />
            <input type="submit" value="Calculate" />
        </form>
    );
};

export default HeronsFormula;
