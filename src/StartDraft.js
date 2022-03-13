import React, { useState, useEffect, useRef, createRef } from 'react';
import DraftDisplay from './DraftDisplay'

export default function startDraft(){
  
const cardsPerPack = 5;
const numberOfPacks = 1;

return(
  <DraftDisplay cardsPerPack={cardsPerPack} numberOfPacks={numberOfPacks} />
)

}