import React, { useState, useEffect, useRef, createRef } from 'react';

export default function cardInfo(props) {
  let cardInfo = [];
 

  for(let i=0;i<props.cardInfo.length;i++){
    if(typeof props.cardInfo[i] == 'undefined')
      cardInfo[i] = '-1';
      else{
        cardInfo[i] = props.cardInfo[i]
    }
  }


 
  if(cardInfo[7] >= 0 && cardInfo[6] >= 0)
  return (
    <div className={"cardInfo"}>
      <div className='cardName'> {cardInfo[1]} </div>
      <div className='type'> {cardInfo[4] + "/" + cardInfo[3].split(" ")[0]} </div>
      <div className='description'> {cardInfo[2]} </div>
      <div className='stats'>
        <div className="attack"> {"ATK:" + cardInfo[6]} </div>
        <div className="defense"> {"DEF:" + cardInfo[7]} </div>
      </div>
    </div>
);
    else if(cardInfo[6] > 0){
      return(
    <div className={"cardInfo"}>
      <div className='cardName'> {cardInfo[1]} </div>
      <div className='type'> {cardInfo[4] + "/" + cardInfo[3].split(" ")[0]} </div>
      <div className='description'> {cardInfo[2]} </div>
      <div className='linkAttack'> {"ATK:" + cardInfo[6]} </div>
    </div>)
    }else if(cardInfo[6] <= 0){
    return(
    <div className={"cardInfo"}>
      <div className='cardName'> {cardInfo[1]} </div>
      <div className='type'> {cardInfo[4] + "/" + cardInfo[3].split(" ")[0]} </div>
      <div className='description'> {cardInfo[2]} </div>
    </div>)
    }else
    return(
      <div className={"cardInfo"}>
        <div className='cardName'> Select a Card to Start Draft </div>
        <div className='type'>  </div>
        <div className='description'> {cardInfo[2]} </div>
      </div>)
}

