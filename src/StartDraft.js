import React, { useState, useEffect, useRef, createRef } from 'react';
import DraftDisplay from './DraftDisplay'
import SettingsButtons from './SettingsButtons'

export default function startDraft(){
const [start, setStart] = useState(1);
const [cardsPerPack, setCardsPerPack] = useState(3);
const [numberOfPacks, setNumberOfPacks] = useState(5);
const [extraDeckPacks, setExtraDeckPacks] = useState(5);

if(start == 0)
return(
  <div className={'startDiv'}>
  <SettingsButtons text={"Number of Cards Per Pack"} setSetting={setCardsPerPack} values={[2,5,10]}/>
  <SettingsButtons text={"Number of Packs Per Draft"} setSetting={setNumberOfPacks} values={[2,5,10]}/>
  <SettingsButtons text={"Number of Extra-Packs Per Draft"} setSetting={setExtraDeckPacks} values={[2,5,10]}/>
  <button className='startDraft'onClick={() => setStart(1)}> Start Draft </button>
  </div>)
else
return(
  <DraftDisplay cardsPerPack={cardsPerPack} 
  numberOfPacks={numberOfPacks+extraDeckPacks}
  extraDeckPacks={extraDeckPacks}/>
)

}