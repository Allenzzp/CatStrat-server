import React, { useEffect, useState } from 'react';

export default function ToggleButton(props) {
  const { buttonName, buttonOnClick, select } = props;
  let classname = "ld__head__button";
  if (select) {
    classname += " ld__head--selected";
  }
  return (
    <button 
      className={ classname }
      onClick = { buttonOnClick }>
      { buttonName }
    </button>
  );
}
