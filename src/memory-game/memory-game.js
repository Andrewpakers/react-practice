import { useState, useEffect } from 'react';
import Scoreboard from './components/scoreboard';
import Gameboard from './components/gameboard';
import {
    getAuth,
    onAuthStateChanged,
} from 'firebase/auth';
import {
    getFirestore,
    collection,
    setDoc,
    doc,
    getDoc,
  } from 'firebase/firestore';

async function saveScore(highScore) {
    try {
        if (getAuth().currentUser && highScore) {
            const userID = await getAuth().currentUser.uid;
            const userRef = collection(getFirestore(), userID);
            await setDoc(doc(userRef, 'highScore'), {
                highScore: highScore,
            });    
        }
    }
    catch(error) {
      console.error('Error saving high score database', error);
    }
}
async function loadScore(setHighScore) {
    try {
        if (getAuth().currentUser) {
            const userID = await getAuth().currentUser.uid;
            const scoreRef = doc(getFirestore(), userID, 'highScore');
            const scoreSnap = await getDoc(scoreRef);
            if (scoreSnap.exists()) {
                const scoreData = scoreSnap.data().highScore;
                setHighScore(scoreData);
            } else {
                console.log("No previous high score");
            }
        }
    }
    catch(error) {
      console.error('Error loading high score database', error);
    }
}
function authUser() {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(getAuth(), user => {
            if (user) {
                resolve(user);
            } else {
                reject('User is not logged in');
            }
        })
    })
}
export default function MemoryGame() {
    const [currentScore, setCurrentScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [highScore, setHighScore] = useState(0);

    useEffect(() => {
        authUser().then((user) => {
            loadScore(setHighScore);
        }, (error) => {
        })
    }, []);
    useEffect(() => {
        if (gameOver === true) {
            if (currentScore > highScore) {
                saveScore(currentScore);
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