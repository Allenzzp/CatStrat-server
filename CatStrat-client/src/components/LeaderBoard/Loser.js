import React from "react";

export default function Loser(props) {
  const { order, strategyName, upvotes, userName } = props;
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
      <td>{ strategyName }</td>
      <td>{ upvotes }</td>
      <td>{ userName }</td>
    </tr>
  );
}