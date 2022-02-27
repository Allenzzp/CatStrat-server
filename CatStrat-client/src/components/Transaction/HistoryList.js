import React from "react";
import History from "./History";


// target_strategy: null
// target_user: null
// user_id: 1

export default function HistoryList(props) {
  const { historyData } = props;

  const historyComponents = historyData.map(historyObj => {
    let historyDateList = new Date(historyObj.created_at).toString().split(" ");
    const historyDate = `${historyDateList[1]} ${historyDateList[2]}, ${historyDateList[3]} ${historyDateList[4]}`;
    return (
      <History
        key={ historyObj.id }
        id={ historyObj.id }
        is_spending={ historyObj.is_spending }
        desc={ historyObj.description }
        amount={ historyObj.amount }
        date={ historyDate }
        username={ historyObj.username }
        strategy_name={ historyObj.strategy_name }
        unlock_chart={ historyObj.unlock_chart }
        unlock_strategies={ historyObj.unlock_strategies }
      />
    )
  })
  return (
    <>
      <h2 className="history__title">CatCoin Transactions</h2>
      <table className="history__table">
        <thead className="history__table__header">
          <History id="" is_spending="" desc="DESCRIPTION" amount="AMOUNT" date="DATE" />
        </thead>
        <tbody className="history__table__body">
          { historyComponents }
        </tbody>
      </table>
    </>
  );
}
