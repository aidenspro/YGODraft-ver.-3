import React, { useState, useEffect, useRef, createRef } from 'react';
import DraftDisplay from './DraftDisplay'

export default function startDraft(){
const [start, setStart] = useState(0);
const [cardsPerPack, setCardsPerPack] = useState(5);
const [numberOfPacks, setNumberOfPacks] = useState(5);
const [extraDeckPacks, setExtraDeckPacks] = useState(5);

if(start == 0)
return(
  <div className={'startDiv'}>
  <div className='numCards'>Cards Per Pack
    <div className='buttonHolder'>
      <button className='sbut' onClick={() => setCardsPerPack(2)}> 2 </button>
      <button className='sbut' onClick={() => setCardsPerPack(5)}> 5 </button>
      <button className='sbut' onClick={() => setCardsPerPack(10)}> 10 </button>
    </div>
  </div>
  <div className='numPacks'>Number of Packs
    <div className='buttonHolder'>
      <button className='sbut' onClick={() => setNumberOfPacks(5)}> 5 </button>
      <button className='sbut' onClick={() => setNumberOfPacks(10)}> 10 </button>
      <button className='sbut' onClick={() => setNumberOfPacks(15)}> 15 </button>
    </div>
  </div>
  <div className='numExtra'>Extra Deck Packs
    <div className='buttonHolder'>
      <button className='sbut' onClick={() => setExtraDeckPacks(0)}> 0 </button>
      <button className='sbut' onClick={() => setExtraDeckPacks(5)}> 5 </button>
      <button className='sbut' onClick={() => setExtraDeckPacks(10)}> 10 </button>
    </div>
  </div>
  <button className='startDraft'onClick={() => setStart(1)}> Start Draft </button>
  </div>)
else
return(
  <DraftDisplay cardsPerPack={cardsPerPack} 
  numberOfPacks={numberOfPacks+extraDeckPacks}
  extraDeckPacks={extraDeckPacks}/>
)

}