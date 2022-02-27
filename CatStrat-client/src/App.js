import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Landing from './pages/Landing';
import DashboardCalendar from './pages/DashboardCalendar';
import DashboardComparison from './pages/DashboardComparison';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import DashboardProfile from './pages/DashboardProfile';
import DashboardCoins from './pages/DashboardCoins';
import DashboardStrategyInfo from './pages/DashboardStrategyInfo';
import DashboardLeaderBoard from './pages/DashboardLeaderBoard';
import DashboardFAQ from './pages/DashboardFAQ';
import DashboardTransaction from './pages/DashboardTransaction';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from 'axios';

function App() {
  const [coins, setCoins] = useState(0);
  const [tab, setTab] = useState('Dashboard')

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const userID = localStorage.getItem("userID")
    console.log("is userid console", userID)

    Axios.get("/username", {params: {userID}})
      .then(res => {
        console.log("dashboardprofile", res.data)
        
        res.data.map((item) => {
          if (userID == item.id) {
            // console.log("itemid", item.id)
            setCoins(item.coins);
            // console.log("coin set", item.coins)
            return;
          }
        })
      })

  }, [id, coins])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/dashboard" element={<Dashboard coins={coins} setCoins={setCoins} tab={tab} setTab={setTab}/>}/>
        <Route path="/calendar" element={<DashboardCalendar coins={coins} setCoins={setCoins} tab={tab} setTab={setTab}/>} />
        <Route path="/profile/:id" element={<DashboardProfile coins={coins} setCoins={setCoins} tab={tab} setTab={setTab}/>}/>
        <Route path="/comparison/:id" element={<DashboardComparison coins={coins} setCoins={setCoins} tab={tab} setTab={setTab}/>} />
        <Route path="/strategyInfo" element={<DashboardStrategyInfo coins={coins} setCoins={setCoins} tab={tab} setTab={setTab}/>}/>
        <Route path="/catecoins/:id" element={<DashboardCoins coins={coins} setCoins={setCoins} tab={tab} setTab={setTab}/>}/>
        <Route path="/leaderBoard" element={<DashboardLeaderBoard coins={coins} setCoins={setCoins} tab={tab} setTab={setTab}/>}/>
        <Route path="/FAQ" element={<DashboardFAQ coins={coins} setCoins={setCoins} tab={tab} setTab={setTab}/>}/>
        <Route path="/transaction" element={<DashboardTransaction coins={coins} setCoins={setCoins} tab={tab} setTab={setTab}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
