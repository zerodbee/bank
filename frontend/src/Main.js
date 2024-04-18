import { Route, Routes, Link } from 'react-router-dom';
import './Main.css';
import Calc from './Content/Calc';
import Header from './Content/Header';
import Footer from './Content/Footer';
import React from 'react';
import CalculatorItem from '../CalculatorItem'

function Main() {
  const [calc, setCalc] = useState([]);

  useEffect(() => {
    const api = "http://127.0.0.1:9001/calculator/get/all";

    fetch(api)
      .then((result) => result.json())
      .then((result) => {
        // console.debug(result.data)
        setCalc(result.data);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="Main">
        <div className="content">
          {calc.map((item) => (
            <CalculatorItem nameCalc={item.nameCalc} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Main;
