import React, { useState, useEffect, useRef, createRef } from 'react';
import CreateCard from './CreateCard';
import DraftPreview from './DraftPreview';
import BigPreview from './BigPreview';


let packNum = 1; //number of the current card set
const draftedCards = [];

export default function draftDisplay(props) {
  const testCard = [55144522,"Click Here","To Start Draft","test"]

  //when updated reloads the createCard component for a new card
  const [changeCard, setChangeCard] = useState(0);
  const [bigImage, setBigImage] = useState(
    <img id={"start card"} 
        className='cardImage'
        src={'https://storage.googleapis.com/ygoprodeck.com/pics/' +
        55144522 +'.jpg'}
        alt={"Click Here To Start Draft"}
      />
  );
  const [cardInfo, setCardInfo] = useState([]);

  //passed to cards to allow them to load more cards when clicked
  const handleOnClick = (currentCard) => {
    draftedCards.push(currentCard)
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
          setBigImage={setBigImage}
          setCardInfo={setCardInfo}
        />
      );

    return cardArray;
  };

  return (
<div className="container">
  <div className="bigPreview">
    <div className="previewCardImage">{bigImage}</div>
      <div className="cardInfo">
        {cardInfo[1]}{'\n'}
        {cardInfo[4] + "/" + cardInfo[3]}{'\n'}
        {cardInfo[11]}{'\n'}
        {cardInfo[2]}
      </div>
  </div>
  <div className="cardDisplay">
  <div className="cardContainer">{getCards()}</div>
  </div>
  <div className={'draftedCards'}>
  <DraftPreview draftedCards={draftedCards} setBigImage={setBigImage}setCardInfo={setCardInfo}/>
  </div>
</div>
  );
}
