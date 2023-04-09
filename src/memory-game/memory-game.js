import { useState, useEffect } from 'react';
import Scoreboard from './components/scoreboard';
import Gameboard from './components/gameboard';

export default function MemoryGame() {
    const [currentScore, setCurrentScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [highScore, setHighScore] = useState(0);
    let gameboardKey = 1;

    useEffect(() => {
        if (gameOver === true) {
            if (currentScore > highScore) {
                setHighScore(currentScore);
                setCurrentScore(0);
                setGameOver(false);
                
            }
        }
    }, [gameOver]);

    return (
        <div>
            <div className='navbar'>
                <div className='title'>
                    <h1>Memory Game</h1>
                    <span>Don't click the same image twice</span>
                </div>
                <Scoreboard currentScore={currentScore} highScore={highScore}/>
            </div>
            <Gameboard currentScore={currentScore} setCurrentScore={setCurrentScore} gameOver={gameOver} setGameOver={setGameOver}/>
        </div>
    );
}