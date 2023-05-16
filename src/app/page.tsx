'use client';

import { useEffect, useState } from 'react';
import Button from './components/button';
import PlusButton from './components/plus-button';
import Stats from './components/stats';

export default function Home() {
  const [seconds, setSeconds] = useState(0);
  const [gameplayTimerRunning, setGameplayTimerRunning] = useState(false);
  const [pts, setPts] = useState(0);
  const [fgm, setFgm] = useState(0);
  const [fga, setFga] = useState(0);
  const [tpm, setTpm] = useState(0);
  const [tpa, setTpa] = useState(0);
  const [ftm, setFtm] = useState(0);
  const [fta, setFta] = useState(0);
  const [oreb, setOreb] = useState(0);
  const [dreb, setDreb] = useState(0);
  const [ast, setAst] = useState(0);
  const [stl, setStl] = useState(0);
  const [blk, setBlk] = useState(0);
  const [tov, setTov] = useState(0);
  const [pf, setPf] = useState(0);

  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    const gameplayTimer = setInterval(() => {
      if (gameplayTimerRunning) {
        setSeconds((seconds) => seconds + 1);
      }
    }, 1000);
    return () => clearInterval(gameplayTimer);
  }, [gameplayTimerRunning]);

  const addPts = (amt: number) => {
    setPts((pts) => pts + amt);
  };

  const addFgm = (amt: number) => {
    setFgm((fgm) => fgm + amt);
    addFga(1);
    addPts(2);
  };

  const addFga = (amt: number) => {
    setFga((fga) => fga + amt);
  };

  const addOreb = (amt: number) => {
    setOreb((oreb) => oreb + amt);
  };

  const addDreb = (amt: number) => {
    setDreb((dreb) => dreb + amt);
  };

  const addTpm = (amt: number) => {
    setTpm((tpm) => tpm + amt);
    addTpa(1);
    addPts(3);
  };

  const addTpa = (amt: number) => {
    setTpa((tpa) => tpa + amt);
  };

  const addAst = (amt: number) => {
    setAst((ast) => ast + amt);
  };

  const addStl = (amt: number) => {
    setStl((stl) => stl + amt);
  };

  const addFtm = (amt: number) => {
    setFtm((ftm) => ftm + amt);
    addFta(1);
    addPts(1);
  };

  const addFta = (amt: number) => {
    setFta((fta) => fta + amt);
  };

  const addBlk = (amt: number) => {
    setBlk((blk) => blk + amt);
  };

  const addTov = (amt: number) => {
    setTov((tov) => tov + amt);
  };

  const addPf = (amt: number) => {
    setPf((pf) => pf + amt);
  };

  const toggleGameplayTimerRunning = () => {
    setGameplayTimerRunning(!gameplayTimerRunning);
    // do not reset the seconds count
  };

  const toggleEdit = () => {
    setIsEdit((isEdit) => !isEdit);
  };

  return (
    <main className="min-w-screen min-h-screen flex flex-col items-center justify-center">
      <Stats
        data={{
          pts: pts,
          fgm: fgm,
          fga: fga,
          tpm: tpm,
          tpa: tpa,
          ftm: ftm,
          fta: fta,
          ast: ast,
          stl: stl,
          oreb: oreb,
          dreb: dreb,
          blk: blk,
          tov: tov,
          pf: pf,
        }}
      />
      <form className="w-full max-w-sm m-2 grid grid-cols-4 justify-items-center place-items-center">
        <PlusButton onClick={addPts} amount={isEdit ? -1 : 1}>
          PTS
        </PlusButton>
        <PlusButton onClick={addPts} amount={isEdit ? -2 : 2}>
          PTS
        </PlusButton>
        <PlusButton onClick={addPts} amount={isEdit ? -3 : 3}>
          PTS
        </PlusButton>
        <PlusButton onClick={addFgm} amount={isEdit ? -1 : 1}>
          FGM
        </PlusButton>
        <PlusButton onClick={addFga} amount={isEdit ? -1 : 1}>
          FGA
        </PlusButton>
        <PlusButton onClick={addOreb} amount={isEdit ? -1 : 1}>
          OREB
        </PlusButton>
        <PlusButton onClick={addDreb} amount={isEdit ? -1 : 1}>
          DREB
        </PlusButton>
        <PlusButton onClick={addTpm} amount={isEdit ? -1 : 1}>
          3PM
        </PlusButton>
        <PlusButton onClick={addTpa} amount={isEdit ? -1 : 1}>
          3PA
        </PlusButton>
        <PlusButton onClick={addAst} amount={isEdit ? -1 : 1}>
          AST
        </PlusButton>
        <PlusButton onClick={addStl} amount={isEdit ? -1 : 1}>
          STL
        </PlusButton>
        <PlusButton onClick={addFtm} amount={isEdit ? -1 : 1}>
          FTM
        </PlusButton>
        <PlusButton onClick={addFta} amount={isEdit ? -1 : 1}>
          FTA
        </PlusButton>
        <PlusButton onClick={addBlk} amount={isEdit ? -1 : 1}>
          BLK
        </PlusButton>
        <PlusButton onClick={addTov} amount={isEdit ? -1 : 1}>
          TOV
        </PlusButton>
        <PlusButton onClick={addPf} amount={isEdit ? -1 : 1}>
          PF
        </PlusButton>
        <button
          onClick={toggleGameplayTimerRunning}
          className="w-40 h-16 m-2 border-2 rounded-2xl col-span-2">
          {!gameplayTimerRunning && 'START'}
          {gameplayTimerRunning && 'STOP'}
          <br />
          {seconds}
        </button>
        <Button onClick={toggleEdit}>{isEdit ? '>' : 'Edit'}</Button>
      </form>
    </main>
  );
}
