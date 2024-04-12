import React, {useState} from 'react';
import './App.css';
import Main from './Main';
import Calc from './Content/Calc';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Panel from './admin/Panel'


function App() {


      return (
        <div className
        ="App">
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Main/>} />
        <Route path='/Panel' element={<Panel/>} />
        <Route path='/Calc' element={<Calc/>} />
      </Routes>
    </BrowserRouter>
        </div>
      );
      
  }

export default App; //чтобы app был доступен для импорта /app это короче архив склад всех ресов джаваскрипт кода, но отображается все в index a index в хтмл
