import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Content/Main';

function App() {

  const[page, setPage] = useState('Main')

  return (
    <div className
    ="App">
      <Header />
      <Main />

      <Footer />
    </div>
  );
}

export default App; //чтобы app был доступен для импорта /app это короче архив склад всех ресов джаваскрипт кода, но отображается все в index a index в хтмл
