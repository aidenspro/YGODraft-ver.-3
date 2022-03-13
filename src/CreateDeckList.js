import React from 'react';
import React, { useState, useEffect, useRef, createRef } from 'react';

//creates a blob of the deck data and exports it to a download onClick
export default function saveList(props) {
  const mainDeck = [];
  const extraDeck = [];
  extraDeck[0] = '#extra';
  mainDeck[0] = '#Created By ...\n#main';

  for (let i = 0; i < props.deckList.length; i++)
    if (
      props.deckList[i][3].split(' ')[0] != 'Effect' ||
      props.deckList[i][3].split(' ')[0] != 'Normal' ||
      props.deckList[i][3].split(' ')[0] != 'Flip' ||
      props.deckList[i][3].split(' ')[0] != 'Tuner'
    ) {
      extraDeck.push(props.deckList[i][0]);
    } else mainDeck.push(props.deckList[i][0]);

  const data = new Blob([mainDeck.concat(extraDeck).join('\n')], {
    type: 'text/plain',
  });
  const downloadLink = window.URL.createObjectURL(data);

  return (
    
      <a download="list.ydk" href={downloadLink}>
      <div className={'fakebutton'} > Download </div>
      </a>

  );
}
