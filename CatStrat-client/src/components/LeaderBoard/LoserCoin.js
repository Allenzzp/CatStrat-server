import React from "react";

export default function LoserCoin(props) {
  const { order, coins, userName } = props;
  let classname = "ld__loser__table__";
  if (order === "#") {
    classname += "header__item";
  } else {
    classname += "body__item";
    if (order % 2 == 0) {
      classname += " even-tr";
    } else {
      classname += " odd-tr-rank";
    }
     
  }
  return (
    <tr className={ classname }>
      <td>{ order }</td>
      <td>{ coins }</td>
      <td>{ userName }</td>
    </tr>
  );
}