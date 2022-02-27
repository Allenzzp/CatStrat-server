import React from 'react';

export default function Top3Button(props) {
  const { strategyName, upvotes, order, userName, avatar_url } = props;

  return (
    <div 
      className={`ld__top-winner__list__item winner-${order}`}
    >
      <span className='winner__rank'>{ order }</span>
      <img className='winner__img' src={ avatar_url } alt={ `#${order}winner's avatar` } />
      <div className='winner__body'>
        <p>
          <span className="winner__body__tag">STRATEGY:</span> { strategyName }
        </p>
        <p>
          <span className="winner__body__tag">UPVOTES:</span> { upvotes }
        </p>
        <p>
          <span className="winner__body__tag">CREATOR:</span> { userName }
        </p>
      </div>
    </div>
  );
}