import React, { useState } from "react";
import "./AmbiguousCase.css";

const AmbiguousCase = () => {
    const [angle, setAngle] = useState("");
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [result, setResult] = useState("");

    const ambiguousCase = (a, b, angle) => {
        if (angle == 90) return "Right Triangle";

        const h = Math.round(b * Math.sin(angle * Math.PI / 180));

        if (angle < 90) {
            if (a < h) return "No Triangle";
            if (a > b) return "One Triangle";
            if (h < a && a < b) return "Two Triangles";
            if (a == h) return "Right Triangle";
            return "No Solution";
        }

        if (angle > 90) {
            if (a <= b) return "No Triangle";
            return "One Triangle";
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const numA = parseFloat(a);
        const numB = parseFloat(b);
        const numAngle = parseFloat(angle);

        if (numAngle < 0 || numAngle > 180) {
            alert("Angle must be between 0 and 180 degrees.");
            return;
        }
        if (numA <= 0 || numB <= 0) {
            alert("Side lengths must be positive.");
            return;
        }

        setResult(ambiguousCase(numA, numB, numAngle));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Ambiguous Case</label>
            <br />
            <label>Angle A</label>
            <input type="number" value={angle} onChange={(e) => setAngle(e.target.value)} min="0" max="180" step="0.001" required />
            <br />
            <label>Side A</label>
            <input type="number" value={a} onChange={(e) => setA(e.target.value)} step="0.001" required />
            <br />
            <label>Side B</label>
            <input type="number" value={b} onChange={(e) => setB(e.target.value)} step="0.001" required />
            <br />
            <label>Triangle Type</label>
            <input type="text" value={result} readOnly />
            <br />
            <input type="submit" value="Calculate" />
        </form>
    );
};

export default AmbiguousCase;