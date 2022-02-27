import React from 'react';

export default function Top3ButtonCoin(props) {
  const { order, userName, avatar_url, coins } = props;

  return (
    <div 
      className={`ld__top-winner__list__item winner-${order}`}
    >
      <span className='winner__rank'>{ order }</span>
      <img className='winner__img' src={ avatar_url } alt={ `#${order}winner's avatar` } />
      <div className='winner__body'>
        <p>
          <span className="winner__body__tag">COINS:</span> { coins }
        </p>
        <p>
          <span className="winner__body__tag">USERNAME:</span> { userName }
        </p>
      </div>
    </div>
  );
}