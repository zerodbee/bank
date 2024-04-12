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
    <Header />
      <div className="Main">
        <div className="content">
          <p className="link1">{CalcObject.name}</p>
          <Link to="/Calc" className="btn">Пeрейти</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Main;
