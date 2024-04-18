import React from "react";
import "./CalculatorItem.css";
import { Routes, Route, Link, useParams } from "react-router-dom";
import InterfaceCalc from "../views/InterfaceCalc";
import { useEffect, useState } from "react";

function CalculatorItem() {
  const [calc, setCalc] = useState([]);

  useEffect(() => {
    const api = `http://127.0.0.1:9001/calculator/get/all`;

    fetch(api)
      .then((res) => res.json())
      .then((result) => {
        setCalc(result.data);
      });
  }, []);

  let element;

  function processElement(currentElement) {
    element = currentElement;
  }

  calc.forEach(processElement);

  if (element) {
    return (
      <div className="CalculatorItem">
        <p>{element.nameCalc}</p>
        <Link to={`InterfaceCalc/${element._id}`}>Перейти</Link>
      </div>
    );
  }
}

export default CalculatorItem;
