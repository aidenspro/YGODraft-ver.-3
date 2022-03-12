import React, { useState, useEffect } from 'react';
import CardArray from './CardArray';

const cardArray = CardArray();

export default function createCard(props) {
  const [cardJSON, setCardJSON] = useState([]);

  function getRandomInt() {
    //console.log(cardArray[getRandomInt()])
    return Math.floor(Math.random() * cardArray.length);
  }

  useEffect(() => {
    fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?id=' + cardArray[getRandomInt()])
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //return obj = data;
        //console.log(data);
        setCardJSON(data.data[0]); // setting obj using setObj
      });
  }, [props.changeCard]);

  //assigns array based on jSon info
  const cardInfo = [
    cardJSON.id,
    cardJSON.name,
    cardJSON.desc,
    cardJSON.type,
    cardJSON.race,
    cardJSON.archetype,
    cardJSON.atk,
    cardJSON.def,
    cardJSON.level,
    cardJSON.attribute,
  ];

  if (cardInfo[6] >= 0) {
    cardInfo[11] = 'ATK/DEF : ' + cardInfo[6] + '/' + cardInfo[7];
  } else {
    cardInfo[11] = ' ';
  }

  const setBigImage = () => {
    props.setCardInfo(cardInfo);
    props.setBigImage(
      <img
        id={cardInfo[0]}
        className='previewCardImage'
        onClick={() => props.handleOnClick(cardInfo)}
        src={
          'https://storage.googleapis.com/ygoprodeck.com/pics/' +
          cardInfo[0] +
          '.jpg'
        }
        alt={cardInfo[1]}
      />
    );
  };

  return (
    <img
      id={cardInfo[0]}
      onClick={() => props.handleOnClick(cardInfo)}
      onMouseEnter={() => setBigImage()}
      className="cardImage"
      src={
        'https://storage.googleapis.com/ygoprodeck.com/pics/' +
        cardInfo[0] +
        '.jpg'
      }
      alt={cardInfo[1]}
    />
  );
}
