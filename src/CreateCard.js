import React, { useState, useEffect } from 'react';

export default function createCard(props) {
  const [cardJSON, setCardJSON] = useState([]);

  useEffect(() => {
    fetch('https://db.ygoprodeck.com/api/v7/randomcard.php')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //return obj = data;
        //console.log(data);
        setCardJSON(data); // setting obj using setObj
      })

  },[props.changeCard]);

//assigns array based on jSon info
  const cardInfo = [cardJSON.id,cardJSON.name,cardJSON.desc,cardJSON.type,cardJSON.race,cardJSON.archetype,cardJSON.atk,cardJSON.def,cardJSON.level,cardJSON.attribute]
  
  if(cardInfo[6] >= 0 ) {
  cardInfo[11]= "ATK/DEF : " + cardInfo[6] + "/" + cardInfo[7];
  }else{
    cardInfo[11]=" "
  }

  return (
  <div className="card" onClick={props.handleOnClick}>
      <img id={cardInfo[0]} 
        className='cardImage'
        src={'https://storage.googleapis.com/ygoprodeck.com/pics/' +
        cardInfo[0] +'.jpg'}
        alt={cardInfo[1]}
      />
  </div>
  )
}