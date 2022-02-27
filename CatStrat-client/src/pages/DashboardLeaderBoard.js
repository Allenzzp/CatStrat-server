import React from 'react'
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import LeaderBoard from "../components/LeaderBoard";
import "../components/LeaderBoard/LeaderBoard.scss";
import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react';
import Axios from 'axios';

export default function DashboardLeaderBoard({coins, setCoins, tab, setTab}) {

  return(
    <>
      <main className="layout">
        <Sidebar tab={tab} setTab={setTab}/>
        <div className="layout__right other_layout">
          <Navbar coins={coins} setCoins={ setCoins } tab={tab} setTab={setTab}/>
          <div className='content-leaderboard'>
            <LeaderBoard coins={coins} setCoins={ setCoins }/>
          </div>
        </div>
      </main>
    </>
  );
}