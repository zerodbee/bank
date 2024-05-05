import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './AdminChangeCalc.css';

function AdminChangeCalc() {
  const { id } = useParams()
  const [token, setToken] = useState('')
  const [calc, setCalc] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    setToken(localStorage.getItem('jwt'))

    if (token === null) {
      navigate('/admin')
    }

    const api = `http://127.0.0.1:9001/calculator/get/one/` + id;

    fetch(api)
      .then((res) => res.json())
      .then((result) => {
        // console.debug(result)
        setCalc(result.data)
      });
  }, [token, navigate, id])

  const changeCalc = async () => {
    const nameCalc = document.getElementById('name').value
    const percent = document.getElementById('percent').value

    if (token !== null) {
      const api = 'http://127.0.0.1:9001/calculator/edit/' + id
      const calculator = {
        nameCalc,
        percent
      }
      const data = {
        token,
        calculator
      }

      await fetch(api, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then((result) => result.json())
        .then((result) => {
          document.getElementById('message').innerText = result.message
        })
    }
  }

  return (
    <>
      <Header />
      <div className='AdminChangeCalc'>
        <Link to="/admin/main" className='to-admin'>Вернуться</Link>
        <p>Изменить калькулятор:</p>
                
        <input id="name" type="text" placeholder="Имя калькулятора" defaultValue={calc.nameCalc} />
        <input id="percent" type="number" placeholder="Процент кредита" defaultValue={calc.percent} />
        <button className='btn-change' id="create" onClick={changeCalc}>Подтвердить</button><br />

        <p id='message'></p>
      </div>
      <Footer />
    </>
  );
}

export default AdminChangeCalc;