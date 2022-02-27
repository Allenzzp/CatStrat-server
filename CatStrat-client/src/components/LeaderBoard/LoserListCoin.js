import React from "react";
import LoserCoin from "./LoserCoin";

export default function LoserListCoin(props) {
  const { loserCoinData } = props;

  const loserComponents = loserCoinData.map(loserObj => {
    return (
      <LoserCoin
        key={ loserObj.order }
        order={ loserObj.order }
        coins={ loserObj.coins }
        userName={ loserObj.userName}
      />
    )
  })

  return (
    <>
      <h2 className="ld__loser__title">Other Rich Users:</h2>
      <table className="ld__loser__table">
        <thead className="ld__loser__table__header">
          <LoserCoin order="#" coins="COINS" userName="USERNAME" />
        </thead>
        <tbody className="ld__loser__table__body">
          { loserComponents }
        </tbody>
      </table>
    </>
  );
}