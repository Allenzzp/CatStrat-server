import React from "react";

export default function History(props) {
  const {desc, amount, date, id, is_spending, username, strategy_name, unlock_chart, unlock_strategies } = props;

  let classname = "history__table__";
  if (!id) {
    classname += "header__item";
  } else {
    classname += "body__item";
    if (is_spending) {
      classname += " even-tr";
    } else {
      classname += " odd-tr";
    }
  }

  let descText = desc;
  if (unlock_chart || unlock_strategies || username || strategy_name) {
    descText = descText.replace("other", username);
  } 
  
  if (strategy_name) {
    descText = descText.replace("strat_place_holder", strategy_name);
  }

  return (
    <tr className={ classname }>
      <td className="desc">{ descText }</td>
      <td>{ !id? amount : is_spending? `- ${amount} ` : `+ ${amount}` }</td>
      <td>{ date }</td>
    </tr>
  );
}