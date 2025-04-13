import React, { useState, useEffect, useRef, createRef } from 'react';

export default function draftPreview(props) {
const divs = [];
const offset = 10;

const setBigImage = (i) => {
  props.setCardInfo(props.draftedCards[i]);
  props.setBigImage(
    <img id={props.draftedCards[i][0]} 
      className='previewCardImage'
      src={'https://images.ygoprodeck.com/images/cards/' +
      props.draftedCards[i][0] +'.jpg'}
      alt={props.draftedCards[i][1]}
    />
  )
}

  for(let i = 0; i< props.draftedCards.length;i++){
    divs[i] = <img id={props.draftedCards[i][0]} 
    className='draftedCardImage'
    onMouseEnter={() => setBigImage(i)}
    src={'https://images.ygoprodeck.com/images/cards/' +
    props.draftedCards[i][0] +'.jpg'}
    alt={props.draftedCards[i][1]}
  />
 
  }

  return <div > {divs} </div>;
}
