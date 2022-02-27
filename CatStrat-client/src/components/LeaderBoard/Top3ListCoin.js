import React from "react";
import Top3ButtonCoin from "./Top3ButtonCoin";

export default function Top3ListCoin(props) {
  const { winCoinData } = props;

  const WinnerComponents = winCoinData.map(winObj => {
    return (
      <Top3ButtonCoin
        key={ winObj.order }
        order={ winObj.order }
        coins={ winObj.coins }
        userName={ winObj.userName}
        avatar_url={ winObj.avatar_url }
      />
    )
  })

  return (
    <ul className="ld__top-winner__list">
      { WinnerComponents }
    </ul>
  );
}