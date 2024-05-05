// import { useState, useEffect } from 'react';
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Admin.css";

function Admin() {
  function AddCalc() {
    const formula = document.getElementById("formula").value;
    const nameCalc = document.getElementById("name").value;

    let message;

    const data = {
      formula: formula,
      name: nameCalc,
    };

    console.debug(data);

    const api = "http://127.0.0.1:9001/calculator/add";

    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  return (
    <>
      <Header />
      <div className="Admin">
        <div className="content">
          <p>Создать калькулятор:</p>
          <input id="formula" type="text" placeholder="Введите формулу"></input>
          <input
            id="name"
            type="text"
            placeholder="Введите название калькулятора"
          ></input>
          <button id="create" onClick={() => AddCalc()}>
            Создать
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Admin;
