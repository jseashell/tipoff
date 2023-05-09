'use client';

import { useState } from 'react';
import Button from './components/button';
import PlusButton from './components/plus-button';

export default function Home() {
  const [seconds, setSeconds] = useState(0);
  const [gameplayTimer, setGameplayTimer] = useState<NodeJS.Timer>();
  const [pts, setPts] = useState(0);

  const startGameplayTimer = () => {
    const timer = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    setGameplayTimer(timer);
  };

  const stopGameplayTimer = () => {
    clearInterval(gameplayTimer);
  };

  const addPts = (amount: number) => {
    setPts(pts + amount);
    console.debug('added points', pts);
  };

  return (
    <main className="min-w-screen min-h-screen flex flex-col items-center justify-center">
      <span>{seconds}</span>
      <form className="border w-full max-w-sm m-2 grid grid-cols-4 justify-items-center">
        <PlusButton onClick={addPts} amount={-1}>
          PTS
        </PlusButton>
        <PlusButton onClick={addPts}>PTS</PlusButton>
        <PlusButton onClick={addPts} amount={2}>
          PTS
        </PlusButton>
        <PlusButton onClick={addPts} amount={3}>
          PTS
        </PlusButton>
        <PlusButton>FGM</PlusButton>
        <PlusButton>FGA</PlusButton>
        <PlusButton>OREB</PlusButton>
        <PlusButton>DREB</PlusButton>
        <PlusButton>3PM</PlusButton>
        <PlusButton>3PA</PlusButton>
        <PlusButton>AST</PlusButton>
        <PlusButton>STL</PlusButton>
        <PlusButton>FTM</PlusButton>
        <PlusButton>FTA</PlusButton>
        <PlusButton>BLK</PlusButton>
        <PlusButton>TOV</PlusButton>
        <PlusButton>PF</PlusButton>
        <Button onClick={startGameplayTimer}>
          MIN
          <br />
          START
        </Button>
        <Button onClick={stopGameplayTimer}>
          MIN
          <br />
          STOP
        </Button>
        <Button>Edit</Button>
      </form>
    </main>
  );
}
