import React from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useNavigate } from 'react-router-dom';
import "../components/Calendar/Calendar.scss";
import Calendar from '../components/Calendar';
import {useParams} from 'react-router-dom'

export default function DashboardCalendar({coins, setCoins, tab, setTab}) {

  return(
    <>
      <main className="layout">
        <Sidebar tab={tab} setTab={setTab}/>
        <div className="layout__right">
          <Navbar coins={coins} setCoins={setCoins} tab={tab} setTab={setTab} />
          <div className="content">
            <Calendar coins={coins} setCoins={setCoins}/>
          </div>
        </div>
      </main>
    </>
  );
}