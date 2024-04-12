
import React from 'react';
import './Panel.css';
import Header from '../Content/Header';
import Footer from '../Content/Footer';

function Panel() {
  return (
    <div className='Admin'>
        <Header/>
        <div className='content'>
            <p>Создать калькулятор:</p>
            <input id="formula" type="text" placeholder="Введите формулу"></input>
            <input id="name" type="text" placeholder="Введите название калькулятора"></input>
            <button id="create">Создать</button>
        </div>
        <Footer/>
    </div>
  );
}

const formula = 'fffff';
const name = document.getElementById('name');


export default Panel;
