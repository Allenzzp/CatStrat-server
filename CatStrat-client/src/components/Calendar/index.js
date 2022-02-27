import React, { useEffect } from 'react';
import { useState} from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import Axios from "axios";
import RecordInput from "./RecordInput";
import $ from 'jquery';

// import "./Calendar.scss";
import { sendGetReq } from '../../helpers/cleanCalendarData';

export default function Calendar() {
  $(() => {
    function changeEventColor() {
      const $records = $(".fc-event-title");
      for (let $record of $records) {
        if (parseInt($($record).text().slice(2)) < 0) {
          $($record).addClass("neg-record");
        } else {
          $($record).addClass("pos-record");
        }
      }
    }

    changeEventColor();

    $('button[title="Previous month"]').on("click", () => {
      setTimeout(changeEventColor, 50);
    });

    $('button[title="Next month"]').on("click", () => {
      setTimeout(changeEventColor, 50);
    });

    $('button[title="This month"]').on("click", () => {
      setTimeout(changeEventColor, 50);
    });
  })
  
  const [calendarData, setCalendarData] = useState([]);
  const [date, setDate] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [netBalance, setNetBalance] = useState(0);
  const [investAmount, setInvestAmount] = useState(0);
  const [strategyID, setStrategyID] = useState("");
  const [stockID, setStockID] = useState("");
  const [recordID, setRecordID] = useState("");
  const [investChoice, setInvestChoice] = useState(true);
  const [render, setRender] = useState(false);

  const userID = localStorage.getItem("userID");

  useEffect(() => {
    sendGetReq("calendar", userID, setCalendarData);
  }, [render])

  const handleDateClick = (arg) => {
    setDate(arg.dateStr);
    setNetBalance(0);
    setInvestAmount(0);
    setStrategyID("");
    setStockID("");
    setRecordID("");
    setShowForm(true);
  }

  const handleRecordClick = (info) => {
    Axios.get(`/calendar/${info.event.id}`)
      .then(res => {
        console.log("single record", res.data);
        const {day, profit, strategy_id, investment, stock_id, stock_option} = res.data[0];
        setRecordID(info.event.id);
        setDate(day.slice(0, 10));
        setInvestAmount(investment);
        setNetBalance(profit);
        setStrategyID(strategy_id);
        setStockID(stock_id);
        setInvestChoice(stock_option);
        setShowForm(true);
      })
      .catch(err => console.log(err));
  }

  return (
    <div className='calendar-container'>
      <div className="calendar">
        <FullCalendar
          plugins={[ dayGridPlugin, interactionPlugin ]}
          initialView="dayGridMonth"
          events={ calendarData }
          dateClick={ handleDateClick }
          eventClick={ handleRecordClick }
          selectable={ true }
          unselectAuto
        />
      </div>
        {showForm? 
          <RecordInput 
            setShowForm={ setShowForm }
            date={ date }
            netBalance={ netBalance }
            setNetBalance = { setNetBalance }
            investAmount={ investAmount }
            setInvestAmount={ setInvestAmount }
            strategyID={ strategyID }
            setStrategyID={ setStrategyID }
            stockID={ stockID }
            setStockID={ setStockID }
            recordID={ recordID }
            setRecordID={ setRecordID }
            investChoice={ investChoice }
            setInvestChoice={ setInvestChoice }
            render={ render }
            setRender={ setRender }
          /> : <></>
        }
    </div>
  );
}