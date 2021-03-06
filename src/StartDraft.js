import React, { useState, useEffect, useRef, createRef } from 'react';
import DraftDisplay from './DraftDisplay'
import SettingsButtons from './SettingsButtons'

export default function startDraft(){
const [start, setStart] = useState(0);
const [cardsPerPack, setCardsPerPack] = useState(5);
const [numberOfPacks, setNumberOfPacks] = useState(10);
const [extraDeckPacks, setExtraDeckPacks] = useState(5);

if(start == 0)
return(
  <div className={'startDiv'} >
  <SettingsButtons text={"Number of Cards Per Pack"} setSetting={setCardsPerPack} values={[5,7,10]} artwork={1}/>
  <SettingsButtons text={"Number of Packs Per Draft"} setSetting={setNumberOfPacks} values={[10,20,25]} artwork={2}/>
  <SettingsButtons text={"Number of Extra-Packs Per Draft"} setSetting={setExtraDeckPacks} values={[5,10,15]} artwork={3}/>
  <button className='startDraft'onClick={() => setStart(1)}> Start Draft </button>
  </div>)
else
return(
  <DraftDisplay cardsPerPack={cardsPerPack} 
  numberOfPacks={numberOfPacks+extraDeckPacks}
  extraDeckPacks={extraDeckPacks}/>
)

}