import React from 'react';
import HeronsFormula from "./Components/HeronsFormula";
import AmbiguousCase from "./Components/AmbiguousCase";
import NewtonsMethod from './Components/NewtonsMethod';
import PolynomialFormula from './Components/Polynomial';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <HeronsFormula />
        <AmbiguousCase />
        <NewtonsMethod />
        <PolynomialFormula />
      </div>
    </div>
  );
};

export default App;