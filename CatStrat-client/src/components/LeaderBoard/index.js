import React, { useEffect, useState } from 'react';
import Axios from "axios";
import ToggleButton from './ToggleButton';
import Top3List from './Top3List';
import LoserList from './LoserList';
import LoserListCoin from './LoserListCoin';
import Top3ListCoin from './Top3ListCoin';
/*
3 divs
  1) toggle bar
  2) top 3
  3) losers
3 components
  1) toggle bar
  2) top container
  3) loser lists
  4) container
*/

export default function LeaderBoard() {

  const [winStratData, setWinStratData] = useState([]);
  const [loserStratData, setLoserStratData] = useState([]);
  const [winCoinData, setWinCoinData] = useState([]);
  const [loserCoinData, setLoserCoinData] = useState([]);
  const [selectB1, setSelectB1] = useState(true);
  const [selectB2, setSelectB2] = useState(false);
  const [isStrat, setIsStrat] = useState(true);

  const getTopStrategies = () => {
    return Axios.get("/leaderBoard/strategy");
  }
  const getTopCoins = () => {
    return Axios.get("/leaderBoard/coin");
  }

  useEffect(() => {
    
    Promise.all([getTopStrategies(), getTopCoins()])
      .then((res) => {
        let i = 1;
        let j = 1;
        const returnedStratData = res[0].data;
        const returnedCoinData = res[1].data;

        const cleanedStratData = returnedStratData.map(stratObj => {
          return {
            order: i++,
            strategyName: stratObj.strategy_name,
            upvotes: stratObj.upvotes,
            userName: stratObj.username,
            avatar_url: stratObj.avatar_url
          }
        });

        const cleanedCoinData = returnedCoinData.map(coinObj => {
          return {
            order: j++,
            coins: coinObj.coins,
            userName: coinObj.username,
            avatar_url: coinObj.avatar_url
          }
        });
        
        const top3WinStratData = cleanedStratData.slice(0, 3);
        const loseStratData = cleanedStratData.slice(3);
        setWinStratData([...top3WinStratData]);
        setLoserStratData([...loseStratData]);

        const top3WinCoinData = cleanedCoinData.slice(0, 3);
        const loseCoinData = cleanedCoinData.slice(3);
        setWinCoinData([...top3WinCoinData]);
        setLoserCoinData([...loseCoinData]);
      })
  }, []);

  const buttonOnClick = (num) => {
    if (num === 1) {
      setSelectB1(true);
      setSelectB2(false);
      setIsStrat(true);
    } else {
      setSelectB1(false);
      setSelectB2(true);
      setIsStrat(false);
    }
  }
  
  return (
    <div className='ld'>

      <div className="ld__item ld__head">
        <ToggleButton 
          buttonName="Top Strategies"
          buttonOnClick={ () => { buttonOnClick(1) } }
          select={ selectB1 }
        />
        <ToggleButton 
          buttonName="Top Coins Owner"
          buttonOnClick={ () => { buttonOnClick(2) } }
          select={ selectB2 }
        />
      </div>

      <div className="ld__item ld__top-winner">
        { isStrat? <Top3List winStratData={ winStratData } />: <Top3ListCoin winCoinData= { winCoinData } /> }
      </div>

      <div className="ld__item ld__loser">
        { isStrat? <LoserList loserStratData={ loserStratData } /> : <LoserListCoin loserCoinData={ loserCoinData } /> }
      </div>

    </div>
  );
}