import React, { useState, useEffect, useRef, createRef } from 'react';
import CreateCard from './CreateCard';
import DraftPreview from './DraftPreview';
import CreateDeckList from './CreateDeckList';
import CardInfo from './CardInfo';

let packNum = 1; //number of the current card set
const draftedCards = [];

export default function draftDisplay(props) {

  //when updated reloads the createCard component for a new card
  const [changeCard, setChangeCard] = useState(0);
  const [bigImage, setBigImage] = useState(
    <img id={"start card"} 
        className='previewCardImage'
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
    if(packNum != (props.numberOfPacks + 1) ){
    for (let i = 0; i < props.cardsPerPack; i++)
      cardArray[i] = (
        <CreateCard
          key={i}
          packNum={packNum}
          changeCard={changeCard}
          handleOnClick={handleOnClick}
          setBigImage={setBigImage}
          setCardInfo={setCardInfo}
          extraDeckPacks={props.extraDeckPacks}
        />
      );
      return cardArray;
    }
    else
    return (<CreateDeckList deckList={draftedCards}/>)

    return cardArray;
  };

  return (
<div className="main">
  <div className="container">
    <div className="previewCardImage">{bigImage}</div>
    <div className="cardDisplay"> {getCards()} </div>
  </div>
  <div className="container2" >
    <div className="cardInfo">
        <CardInfo cardInfo={cardInfo}/>
    </div>
    <div class="draftedCards"><DraftPreview draftedCards={draftedCards} setBigImage={setBigImage}setCardInfo={setCardInfo}/></div>
   </div>

</div>
  );
}
