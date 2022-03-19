import React, { useState, useEffect, useRef, createRef } from 'react';


export default function settingsButtons(props){
  const ref = useRef()
  const ref1 = useRef()
  const ref2 = useRef()

  const onClick =(value,num) => {
    props.setSetting(value);
    
    if(num == 0){
    ref.current.className = 'sbutSelected';
    ref1.current.className = 'sbut';
    ref2.current.className = 'sbut';
    }else if(num == 1){
    ref.current.className = 'sbut';
    ref1.current.className = 'sbutSelected';
    ref2.current.className = 'sbut';
    }else{
    ref.current.className = 'sbut';
    ref1.current.className = 'sbut';
    ref2.current.className = 'sbutSelected';
    }
  }
  
  return(
    <div className='numCards'>{props.text}
    <div className='buttonHolder' >
      <button ref={ref} className='sbut' onClick={() => onClick(props.values[0],0)}> {props.values[0]} </button>
      <button ref={ref1} className='sbut' onClick={() => onClick(props.values[1],1)}> {props.values[1]} </button>
      <button ref={ref2} className='sbut' onClick={() => onClick(props.values[2],2)}> {props.values[2]} </button>
    </div>
    <div className={'startArtwork'+props.artwork} />
  </div>
  )
}