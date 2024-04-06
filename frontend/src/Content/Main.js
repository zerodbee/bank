//import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import './Main.css';
//import Calc from './Calc';

function Main() {
  return (
    //<BrowserRouters>
    <div className="Main">
      <div className="info1">
            <p className="link1">Калькулятор рассрочки</p>
            <a href="Calc.js" className='btn'>Прейти</a>
           
        </div>
    </div>
    //</BrowserRouter>
  );
}

export default Main;
