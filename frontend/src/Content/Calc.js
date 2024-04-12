import React, { UseState } from 'react';
import Header from './Header';
import Footer from './Footer';

const operations = {
  plus: '+',
  minus: '-',
  multiply: '*',
  division: '/',
  degree: '**'
}

const Calc = () => {

  //const [formula, setFormula] = UseState('');
  //const [result, setResult] = UseState('');


    return (
      <>
          
          <div>
            <p className="link">Калькулятор рассрочки</p>
                <input type="number" placeholder="Введите первое число" min="0"></input><br />
                <input type="number" placeholder="Введите второе число" min="0"></input><br />
                <button id="result">Вычислить</button>
          </div>
          <Footer />
      </>
    );
  }


export default Calc;