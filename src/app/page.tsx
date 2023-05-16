'use client';

import { useEffect, useState } from 'react';
import ControlPanel from './components/control-panel';
import Stats from './components/stats';

export default function Home() {
  const [millis, setMillis] = useState(0);
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

  const [gameplayTimerRunning, setGameplayTimerRunning] = useState(false);

  useEffect(() => {
    const gameplayTimer = setInterval(() => {
      if (gameplayTimerRunning) {
        setMillis((millis) => millis + 100);
      }
    }, 100);
    return () => clearInterval(gameplayTimer);
  }, [gameplayTimerRunning]);

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
      <ControlPanel
        state={{
          millis: millis,
          setMillis: setMillis,
          setPts: setPts,
          setFgm: setFgm,
          setFga: setFga,
          setTpm: setTpm,
          setTpa: setTpa,
          setFtm: setFtm,
          setFta: setFta,
          setOreb: setOreb,
          setDreb: setDreb,
          setAst: setAst,
          setStl: setStl,
          setBlk: setBlk,
          setTov: setTov,
          setPf: setPf,
          gameplayTimerRunning: gameplayTimerRunning,
          setGameplayTimerRunning: setGameplayTimerRunning,
        }}
      />
    </main>
  );
}
