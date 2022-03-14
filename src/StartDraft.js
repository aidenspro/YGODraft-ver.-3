import React, { useState, useEffect, useRef, createRef } from 'react';
import DraftDisplay from './DraftDisplay'

export default function startDraft(){
const [start, setStart] = useState(1);
const cardsPerPack = 5;
const numberOfPacks = 25;
const extraDeckDraft = 0;

if(start == 0)
return(<div>Test 
  <button onClick={() => setStart(1)}> Test button </button>
</div>)
else
return(
  <DraftDisplay cardsPerPack={cardsPerPack} numberOfPacks={numberOfPacks} extraDeckDraft={extraDeckDraft}/>
)

}