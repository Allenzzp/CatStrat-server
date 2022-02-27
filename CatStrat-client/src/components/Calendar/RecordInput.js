import "react-widgets/scss/styles.scss";
import "./RecordInput.scss";
import * as React from 'react';
import { useEffect, useState } from "react";
import NumberPicker from "react-widgets/NumberPicker";
import DropdownList from "react-widgets/DropdownList";
import Axios from "axios";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import CloseIcon from '@mui/icons-material/Close';
import { format, parseISO } from 'date-fns';


export default function RecordInput(props) {
  const userID = localStorage.getItem("userID");
  const {
    date,
    setShowForm,
    netBalance,
    setNetBalance,
    investAmount,
    setInvestAmount,
    strategyID,
    setStrategyID,
    stockID,
    setStockID,
    recordID,
    setRecordID,
    setRender,
    investChoice,
    setInvestChoice,
    render
  } = props;

  const [stockData, setStockData] = useState([]);
  const [stratData, setStratData] = useState([]);

  const getStockData = () => {
    return Axios.get("/stock")
  }
  const getStratData = () => {
    return Axios.get(`/strategy/${userID}`)
  }
  useEffect(() => {
    Promise.all([getStockData(), getStratData(userID)])
      .then(res => {
        const stockDataReturn = res[0].data.map(dataObj => {
          return {
            id: dataObj.id,
            stock: dataObj.stock_symbol
          }
        });
        const startDataReturn = res[1].data.map(stratObj => {
          return {
            id: stratObj.id,
            strategy: stratObj.strategy_name
          }
        });
        setStockData([...stockDataReturn]);
        setStratData([...startDataReturn]);
      })
      .catch(err => console.log(err.message));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleInvestChoiceChange(e) {
    setInvestChoice(e.target.value);
  }

  function clear() {
    setNetBalance(0);
    setInvestAmount(0);
    setStrategyID("");
    setStockID("");
    setRecordID("");
  }

  function deleteRecord() {
    Axios.delete(`/calendar/${recordID}`)
      .then(res => {
        clear();
        setShowForm(false);
        setRender(!render);
        alert("Delete 1 record successfully!");
      })
      .catch(err => {
        console.log(err.message);
      })
  }

  function submit() {
    if (recordID) {
      Axios.put(`/calendar/${recordID}`, {
        netBalance,
        investAmount,
        strategyID,
        stockID,
        date,
        investChoice,
        userID,
      })
        .then(res => {
          console.log("Update route sent back", res.data);
          alert("update submitted!");
          setRender(!render);
          close();
        });
    } else {
      Axios.post("/calendar", {
        netBalance,
        investAmount,
        strategyID,
        stockID,
        date,
        investChoice,
        userID
      })
        .then(res => {
          // console.log("server sends back latest inserted data", res.data);
          alert("Record Created!");
          setRender(!render);
          close();
        });
    }
  }

  function close() {
    clear();
    setShowForm(false);
  }

  return (
    <div className="paper__container">
      <form
        className="record-input"
        onSubmit={handleSubmit}
      >

        <CloseIcon
          id="button__close"
          onClick={close}
        />
        <p className="input__date_title" >{format(parseISO(date), 'PP')}</p>
        <hr/>
        <label htmlFor="balance" className="input__title">
          Gain/Loss
        </label>
        <div className="input__container">
          <span className="input__container__symbol">
            $
          </span>
          <input
            className="input__container__box"
            id="balance"
            name="balance"
            type="text"
            value={netBalance}
            onChange={(e) => {
              setNetBalance(e.target.value)
            }}
          />
        </div>

        <br />

        <label htmlFor="investAmount" className="input__title">
          Invest Amount
        </label>
        <div className="input__container">
          <span className="input__container__symbol">
            $
          </span>
          <NumberPicker
            className="input__container__box"
            id="investAmount"
            value={investAmount}
            step={100}
            onChange={value => setInvestAmount(value)}
          />
        </div>
        <br />

        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group"
            className="input__title">Investment Options</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={investChoice}
            onChange={handleInvestChoiceChange}
            className="input__radio"
          >
            <FormControlLabel className="input__radio__label" value={true} control={<Radio />} label="Stock" />
            <FormControlLabel className="input__radio__label" value={false} control={<Radio />} label="Option" />
          </RadioGroup>
        </FormControl>
        <br />

        <label htmlFor="strategy" className="input__title">
          Investment Strategy
        </label>
        <div className="input__container">
          <DropdownList
          className=".rw-dropdown-list-value"
            id="strategy"
            value={strategyID}
            onChange={nextValue => {
              setStrategyID(nextValue.id);
            }}
            dataKey="id"
            textField="strategy"
            data={stratData}
          />
        </div>
        <br />

        <label htmlFor="stock" className="input__title">
          Stock/Option ticker
        </label>
        <div className="input__container">
          <DropdownList
            className="input__inputfield"
            id="stock"
            value={stockID}
            onChange={nextValue => {
              setStockID(nextValue.id);
            }}
            dataKey="id"
            textField="stock"
            data={stockData}
          />
        </div>
        <br />

        <p className="input__hidden">RecordID: {recordID}</p>
        <br />

        <section className="button__submit">
          <button
            className="button__submit__submit"
            type="submit"
            onClick={submit}
          >Submit</button>
          <button
            className="button__submit__delete"
            type="submit"
            onClick={deleteRecord}
          >Delete</button>

        </section>
      </form>
    </div>
  );
}