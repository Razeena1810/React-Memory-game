import './App.css';
import Card from './components/Card'
import Images from './images';
import {useState} from "react";
import {shuffle} from 'lodash';
import Instructions from './components/Instructions';

function App() {
  const [cards,setCards] = useState( shuffle([...Images, ...Images]) );
  const [won,setWon] = useState(false);
  const [foundPairs,setFoundPairs] = useState([]);
  const [activeCards,setActiveCards] = useState([]);
  
  const [clicks,setClicks] = useState(0);

  // setCards(shuffle([...Images, ...Images]));

  function flipCard(index) {
    if (won) {
      setCards(shuffle([...Images, ...Images]));
      setFoundPairs([]);
      setWon(false);
      setClicks(0);
    }
    if (activeCards.length === 0) {
      setActiveCards([index]);
    }
    if (activeCards.length === 1) {
      const firstIndex = activeCards[0];
      const secondsIndex = index;
      if (cards[firstIndex] === cards[secondsIndex]) {
        if (foundPairs.length + 2 === cards.length) {
          setWon(true);
        }
        setFoundPairs( [...foundPairs, firstIndex, secondsIndex] );
      }
      setActiveCards([...activeCards, index]);
    }
    if (activeCards.length === 2) {
      setActiveCards([index]);
    }
    setClicks(clicks + 1);
  }
  return (
    //input the instructions here
    <div>
      
      <Instructions />
      <div className="board">
        {cards.map((card,index) => {
          const flippedToFront = (activeCards.indexOf(index) !== -1) || foundPairs.indexOf(index) !== -1;
          return (
         <Card key={index} card={card} index={index} flippedToFront={flippedToFront} flipCard={flipCard} />
          );
        })}
      </div>
      <div className="stats">
        {won && (
          <>You won the game! Congratulations!<br />
            Click any card to play again.<br /><br />
          </>
        )}
        
        Clicks: {clicks} &nbsp;&nbsp;&nbsp; Found pairs:{foundPairs.length/2}
      </div>    
     
    </div>
    //cards are reshuffled after being clicked
  );
}

export default App;
