import { useState } from 'react';

export default function Scoreboard({ currentScore, highScore }) {


    return (
        <div className='scoreboard'>
            <div className='score'>
                <span className='score'>Current Score:</span>
                <span className='score'>High Score:</span>
            </div>
            <div className='score number'>
                <span className='score'>{currentScore}</span>
                <span className='score'>{highScore}</span>
            </div>
        </div>
    );
}