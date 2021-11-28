import '../App.css';
//function to make cards change(flip over) after being clicked 
function Card ({flippedToFront, index, card, flipCard}){
  return( 
    <div className={"card-outer " + (flippedToFront ? 'flipped' : '')}
    onClick={() => flipCard(index)}>
 <div className="card">
   <div className="front">
     <img src={card} alt=""/>
   </div>
   <div className="back" />
 </div>
</div> 
  )
}
   export default Card; 