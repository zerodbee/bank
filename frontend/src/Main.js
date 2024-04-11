import { Route, Routes, Link } from 'react-router-dom';
import './Main.css';
import Calc from './Content/Calc';
import Header from './Content/Header';
import Footer from './Content/Footer';
import React from 'react';

const CalcObject = {
  id: 1,
  name: 'Калькулятор рассрочки'
}

function Main() {

      return (
        <>
    <div className="Main">
      <Header />
        <div className="info1">

              <p className="link1">{CalcObject.name}</p>

            <a href="/Calc" className='btn'>Пeрейти</a>
          </div>
    </div>
    <Footer />
    </>
  );

}

export default Main;
