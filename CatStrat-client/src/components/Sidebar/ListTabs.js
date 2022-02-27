import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TodayIcon from '@mui/icons-material/Today';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import PaidIcon from '@mui/icons-material/Paid';

import "./ListTabs.scss";
import "./Sidebar.scss";

import Axios from "axios";
import { useNavigate } from 'react-router-dom';


export default function ListTabs(props) {
  let navigate = useNavigate();
  let { tab, setTab } = props;

  const userID = localStorage.getItem("userID");

  const sendGetReq = (target, userID) => {
    Axios.get(`/${target}`, { params: { userID } })
      .then(res => {
        console.log("records data", res.data);
      })
      .catch(err => console.log(err));
  }

  const profileRoute = (userID) => {
    setTab('Profile')
    navigate(`/profile/${userID}`)
  }

  const comparisonRoute = (userID) => {
    setTab('Comparison')
    navigate(`/comparison/${userID}`)
  }

  const dashboardRoute = (userID) => {
    if (userID) {
      setTab('Dashboard')
      navigate(`/`)
    }
  }
  const calendarRoute = (userID) => {
    if (userID) {
      setTab('Calendar')
      navigate(`/calendar`);
    }
  }

  const strategyInfoRoute = (userID) => {
    if (userID) {
      navigate(`/strategyInfo`)
      setTab('StrategyInfo')

    }
  };

  const leaderBoardRoute = (userID) => {
    if (userID) {
      navigate(`/leaderBoard`)
      setTab('Leaderboard')
    }
  };

  const FAQRoute = (userID) => {
    if (userID) {
      navigate(`/FAQ`)
      setTab('FAQ')
    }
  }
  const transactionRoute = (userID) => {
    if (userID) {
      navigate(`/transaction`)
      setTab('Transaction')
    }
  };

  return (
    <div className='sidebar'>
      <div onClick={() => { dashboardRoute(userID) }} className={tab==='Dashboard'?"nav-item-selected" : "nav-item"} >
        <div >
          <DashboardIcon style={{ width: '1.5em', height: '1.5em' }} className="nav-item__icon" /> </div>
        <div className="label">Dashboard </div>
      </div>


      <div className={tab==='Profile'?"nav-item-selected" : "nav-item"} onClick={() => { profileRoute(userID) }} >
        <div>
          <AccountCircleIcon style={{ width: '1.5em', height: '1.5em' }} className="nav-item__icon" /> </div>
        <div className="label">Profile </div>
      </div>


      <div onClick={() => { calendarRoute(userID) }} className={tab==='Calendar'?"nav-item-selected" : "nav-item"} >
        <div>
          <TodayIcon style={{ width: '1.5em', height: '1.5em' }} className="nav-item__icon" /> </div>
        <div className="label">Calendar </div>
      </div>

      <div onClick={() => { strategyInfoRoute(userID) }} className={tab==='StrategyInfo'?"nav-item-selected" : "nav-item"}>
        <div>
          <AssignmentIcon style={{ width: '1.5em', height: '1.5em' }} className="nav-item__icon" /> </div>
        <div className="label">Strategy Info </div>
      </div>

      <div onClick={() => { comparisonRoute(userID) }} className={tab==='Comparison'?"nav-item-selected" : "nav-item"} >
        <CompareArrowsIcon style={{ width: '1.5em', height: '1.5em' }} className="nav-item__icon" />
        <div className="label">Comparison </div>
      </div>

      <div onClick={() => { leaderBoardRoute(userID) }} className={tab==='Leaderboard'?"nav-item-selected" : "nav-item"}  >
        <div >
          <LeaderboardIcon className='nav-item__icon' style={{ width: '1.5em', height: '1.5em' }} />
        </div>
        <div className="label">Leaderboard </div>
      </div>

      <div onClick={() => { transactionRoute(userID) }} className={tab==='Transaction'?"nav-item-selected" : "nav-item"}  >
        <div >
          <PaidIcon className='nav-item__icon' style={{ width: '1.5em', height: '1.5em' }} />
        </div>
        <div className="label">Transactions </div>
      </div>

      <div onClick={() => { FAQRoute(userID) }} className={tab==='FAQ'?"nav-item-selected" : "nav-item"}  >
        <div >
          <LiveHelpIcon className='nav-item__icon' style={{ width: '1.5em', height: '1.5em' }} />
        </div>
        <div className="label">FAQ </div>
      </div>

    </div>
  );
}