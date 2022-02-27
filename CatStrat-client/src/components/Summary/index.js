import './Summary.scss';
import getTotalEarnings from '../../helpers/getTotalEarnings';
import getAverageEarnings from '../../helpers/getAverageEarnings';

import LineGraph from './LineGraph';
import Statistic from './Statistic';
import StrategyContainer from './StrategyContainer';
import getMostGain from '../../helpers/getMostGain';

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Summary({ data }) {
  const userID = localStorage.getItem("userID")
  const [stock, setStock] = useState('')

  const totalFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  });

  const averageFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  // Organize and manipulate data
  const totalEarnings = totalFormatter.format(getTotalEarnings(data));
  const averageEarnings = averageFormatter.format(getAverageEarnings(data));
  const mostGain = totalFormatter.format(getMostGain(data));


  useEffect(() => {
    axios.get(`/dashboard/top-stock`, { params: { user_id: userID } })
      .then((res) => {
        console.log('stock response', res.data[0].stock_symbol)
        setStock(res.data[0].stock_symbol)
      })
  }, [])



  // getMostBoughtStock(userID)
  //   .then((response) => {
  //     console.log('topStock', response);
  //   });
  // Store data after being manipulated
  // const [displayData, setDisplayData] = useState({})

  // Store user selection
  // const [selection, setSelection] = useState('All time')



  return (
    <section className="full-container">
      <div className="stats">

        <Statistic
          label={'Total Earnings'}
          data={totalEarnings}
          image='sum.png'
        />

        <Statistic
          label={'Average Daily Earnings'}
          data={averageEarnings}
          image='average.png'
        />

        <Statistic
          label={'Most Purchased Stock'}
          data={stock}
          image='trend.png'
        />

        <Statistic
          label={'Highest gain in a day!'}
          data={mostGain}
          image='gain.png'
        />
      </div>

      <div className="graphs-container">
        <LineGraph data={data} />
        <StrategyContainer data={data} />

      </div>

    </section>
  );
}