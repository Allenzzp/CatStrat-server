import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
// import "../styles/dashboard.scss";
import { useNavigate } from 'react-router-dom';
import Summary from '../components/Summary';

export default function Dashboard({ coins, setCoins, tab, setTab }) {
  const userID = localStorage.getItem('userID')

  // Store all data in state and manipulate it as need be
  const [data, setData] = useState([])

  let navigate = useNavigate();


  useEffect(() => {

    if (userID) {
      console.log('userID', userID)
      Axios.get(`/dashboard`, { params: { user_id: userID } })
        .then((res) => {
          console.log('response', res.data)
          setData(res.data)
        })
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <main className="layout">
        <Sidebar tab={tab} setTab={setTab}/>
        <div className="layout__right other_layout">
          <Navbar coins={coins} setCoins={setCoins} tab={tab} setTab={setTab}/>
          <div className="content">
            <Summary data={data} coins={coins} setCoins={setCoins} />
          </div>
        </div>
      </main>
    </>
  );
}