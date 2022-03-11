import React, { useState, useEffect, useRef, createRef } from 'react';
import CreateCard from './CreateCard';
import DraftDisplay from './DraftDisplay';

let packNum = 1; //number of the current card set

export default function draftDisplay(props) {
  //when updated reloads the createCard component for a new card
  const [changeCard, setChangeCard] = useState(0);

  //passed to cards to allow them to load more cards when clicked
  const handleOnClick = () => {
    setChangeCard(packNum); //reload card component
    packNum++; //update pack#
  };

  const getCards = () => {
    const cardArray = [];
    for (let i = 0; i < props.cardsPerPack; i++)
      cardArray[i] = (
        <CreateCard
          key={i}
          changeCard={changeCard}
          handleOnClick={handleOnClick}
        />
      );

    return cardArray;
  };

  return (
    <div>
      <div className="cardContainer">{getCards()}</div>
      <DraftDisplay />
    </div>
  );
}
