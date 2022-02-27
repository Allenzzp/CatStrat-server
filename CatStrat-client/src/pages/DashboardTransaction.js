import React from 'react'
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Transaction from "../components/Transaction";
import "../components/Transaction/Transaction.scss";

export default function DashboardTransaction({coins, setCoins, tab, setTab}) {

  return(
    <>
      <main className="layout">
        <Sidebar tab={tab} setTab={setTab}/>
        <div className="layout__right other_layout">
          <Navbar coins={coins} setCoins={ setCoins } tab={tab} setTab={setTab}/>
          <div className='content'>
            <Transaction coins={coins} setCoins={ setCoins }/>
          </div>
        </div>
      </main>
    </>
  );
}