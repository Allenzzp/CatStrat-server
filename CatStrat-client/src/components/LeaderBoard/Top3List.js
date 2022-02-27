import React from "react";
import Top3Button from "./Top3Button";

export default function Top3List(props) {
  const { winStratData } = props;

  const WinnerComponents = winStratData.map(winObj => {
    return (
      <Top3Button
        key={ winObj.order }
        order={ winObj.order }
        strategyName={ winObj.strategyName }
        upvotes={ winObj.upvotes }
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