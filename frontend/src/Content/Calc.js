import React, { UseState } from 'react';

const operations = {
  plus: '+',
  minus: '-',
  multiply: '*',
  division: '/',
  degree: '**'
}

const Calculator = () => {

  const [formula, setFormula] = UseState('');
  const [result, setResult] = UseState('');


    return (
      <main>
          
      </main>
    );
  }


export default Calc;