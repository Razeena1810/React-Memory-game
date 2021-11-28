import Modal from 'react-modal';
import {useState} from "react";
//instruction button styles
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function Instructions() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
//opens button
  return (
    <div>
      <button onClick={openModal}>Instructions</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Welcome to my Memory Game!</h2>
        <button onClick={closeModal}>Exit</button>
        <div>
          <ul>
            
          Match any 2 squares on the grid, click to match.<br/>
       Once all images have been matched, you win the game and it will reshuffle for you to play again.
 <h2>ENJOY!</h2>
</ul>
        </div>
        
      </Modal>
    </div>
  );
}

export default Instructions; 