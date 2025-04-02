import React, { useState } from "react";
import "./Polynomial.css";

const PolynomialFormula = () => {
    const [coefficients, setCoefficients] = useState("");
    const [exponents, setExponents] = useState("");
    const [xValue, setXValue] = useState("");
    const [polynomialString, setPolynomialString] = useState("");
    const [result, setResult] = useState("");

    const polynomial = (coefficients, exponents, x) => {
        let result = 0;
        let polynomialString = "";

        for (let i = 0; i < coefficients.length; i++) {
            let coeff = parseFloat(coefficients[i]);
            let expo = parseFloat(exponents[i]);

            if (isNaN(coeff) || isNaN(expo)) continue;

            let term = coeff * Math.pow(x, expo);
            result += term;

            let sign = coeff >= 0 && i > 0 ? " + " : " ";
            polynomialString += `${sign}${coeff}x^${expo}`;
        }

        return { polynomialString, result };
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        let coeffArray = coefficients.split(" ");
        let expoArray = exponents.split(" ");

        if (!coefficients || !exponents || isNaN(xValue)) {
            alert("Please enter valid coefficients, exponents, and an X value.");
            return;
        }

        if (coeffArray.length !== expoArray.length) {
            alert("Uneven amount of coefficients and exponents entered.");
            return;
        }

        if (coeffArray.some((c) => isNaN(parseFloat(c))) ||
            expoArray.some((e) => isNaN(parseFloat(e)))) {
            alert("Please enter only numeric values for coefficients and exponents.");
            return;
        }

        const { polynomialString, result } = polynomial(coeffArray, expoArray, parseFloat(xValue));

        setPolynomialString(polynomialString);
        setResult(result.toFixed(3));
    };

    return (
        <form id="poly-form" onSubmit={handleSubmit}>
            <label>Polynomial Function</label>
            <br />
            <label>Coefficients</label>
            <input type="text" name="poly-coeff" id="poly-coeff" value={coefficients} onChange={(e) => setCoefficients(e.target.value)} required />
            <br />
            <label>Exponents</label>
            <input type="text" name="poly-expo" id="poly-expo" value={exponents} onChange={(e) => setExponents(e.target.value)} required />
            <br />
            <label>X Value</label>
            <input type="number" name="poly-value" id="poly-value" step="0.001" value={xValue} onChange={(e) => setXValue(e.target.value)} required />
            <br />
            <label>Polynomial Function (Result)</label>
            <input type="text" name="poly-fxn" id="poly-fxn" value={polynomialString} readOnly />
            <br />
            <label>Polynomial Evaluation</label>
            <input type="text" name="poly-result" id="poly-result" value={result} readOnly />
            <br />
            <input type="submit" value="Calculate" />
        </form>
    );
};

export default PolynomialFormula;
