import React from "react";
import Loser from "./Loser";

export default function LoserList(props) {
  const { loserStratData } = props;

  const loserComponents = loserStratData.map(loserObj => {
    return (
      <Loser
        key={ loserObj.order }
        order={ loserObj.order }
        strategyName={ loserObj.strategyName }
        upvotes={ loserObj.upvotes }
        userName={ loserObj.userName}
      />
    )
  })

  return (
    <>
      <h2 className="ld__loser__title">Other Popular Strategies:</h2>
      <table className="ld__loser__table">
        <thead className="ld__loser__table__header">
          <Loser order="#" strategyName="STRATEGY" upvotes="UPVOTES" userName="CREATOR" />
        </thead>
        <tbody className="ld__loser__table__body">
          { loserComponents }
        </tbody>
      </table>
    </>
  );
}