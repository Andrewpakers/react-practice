import { useEffect, useState } from 'react';
import Card from './card';
import images from './imageManager'



function shuffleCards(cards) {
    let currentIndex = cards.length;
    let randomIndex = 0;
    const copyCards = cards.slice();
    const shuffledCards = [];

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        shuffledCards.push(copyCards[randomIndex]);
        copyCards.splice(randomIndex, 1)
    }
    return shuffledCards;
}

function generateCards(handleCardClick) {
    const cards = images.map((image, index) => {
        return (
            <div key={index} onClick={() => handleCardClick(index)} >
                <Card image={image} />
            </div>
        );
    })
   
    return cards;
}

export default function Gameboard ({ currentScore, setCurrentScore, gameOver, setGameOver}) {
    const [cards, setCards] = useState(shuffleCards(generateCards(handleCardClick)));
    let clickedCards = [];
    let counter = 0;

    function handleCardClick(index) {
        
        if (!clickedCards.includes(index)) {
            clickedCards.push(index);
            setCards(shuffleCards(cards));
            counter++;
            setCurrentScore(counter);
        } else {
            clickedCards = [];
            counter = 0;
            setCards(shuffleCards(generateCards(handleCardClick)));
            setGameOver(true);
        }
     }

    return (
        <div className='gameboard'>
            {cards}
        </div>
    );
}