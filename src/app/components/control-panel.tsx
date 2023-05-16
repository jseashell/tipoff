import { useEffect, useState } from 'react';
import Button from './button';

export default function ControlPanel(props) {
  const [time, setTime] = useState('');
  const [gameplayTimerColor, setGameplayTimerColor] = useState('bg-green-500');

  useEffect(() => {
    const minutes = Math.floor(props.state.millis / 60000);
    const seconds = (props.state.millis % 60000) / 1000;
    const calculated =
      seconds == 60
        ? minutes + 1 + ':00'
        : minutes + ':' + (seconds < 10 ? '0' : '') + seconds.toFixed(1);
    setTime(calculated);
  });

  const addPts = (amt: number) => {
    props.state.setPts((pts) => Math.max(pts + amt, 0));
  };

  const addFgm = (amt: number) => {
    props.state.setFgm((fgm) => Math.max(fgm + amt, 0));
    addFga(isEdit ? -1 : 1);
    addPts(isEdit ? -2 : 2);
  };

  const addFga = (amt: number) => {
    props.state.setFga((fga) => Math.max(fga + amt, 0));
  };

  const addOreb = (amt: number) => {
    props.state.setOreb((oreb) => Math.max(oreb + amt, 0));
  };

  const addDreb = (amt: number) => {
    props.state.setDreb((dreb) => Math.max(dreb + amt, 0));
  };

  const addTpm = (amt: number) => {
    props.state.setTpm((tpm) => Math.max(tpm + amt, 0));
    addTpa(isEdit ? -1 : 1);
    addPts(isEdit ? -3 : 3);
  };

  const addTpa = (amt: number) => {
    props.state.setTpa((tpa) => Math.max(tpa + amt, 0));
  };

  const addAst = (amt: number) => {
    props.state.setAst((ast) => Math.max(ast + amt, 0));
  };

  const addStl = (amt: number) => {
    props.state.setStl((stl) => Math.max(stl + amt, 0));
  };

  const addFtm = (amt: number) => {
    props.state.setFtm((ftm) => Math.max(ftm + amt, 0));
    addFta(isEdit ? -1 : 1);
    addPts(isEdit ? -1 : 1);
  };

  const addFta = (amt: number) => {
    props.state.setFta((fta) => Math.max(fta + amt, 0));
  };

  const addBlk = (amt: number) => {
    props.state.setBlk((blk) => Math.max(blk + amt, 0));
  };

  const addTov = (amt: number) => {
    props.state.setTov((tov) => Math.max(tov + amt, 0));
  };

  const addPf = (amt: number) => {
    props.state.setPf((pf) => Math.max(pf + amt, 0));
  };

  const toggleGameplayTimerRunning = (e) => {
    e?.preventDefault();

    props.state.setGameplayTimerRunning((gameplayTimerRunning) => {
      setGameplayTimerColor(
        gameplayTimerRunning ? 'bg-green-500' : 'bg-red-500'
      );
      return !gameplayTimerRunning;
    });
    // do not reset the seconds count
  };

  const [isEdit, setIsEdit] = useState(false);
  const toggleEdit = () => {
    setIsEdit((isEdit) => !isEdit);
  };

  return (
    <form className="max-w-sm m-2 grid grid-cols-4 gap-y-6 place-items-center">
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
        onClick={(e) => toggleGameplayTimerRunning(e)}
        className={
          gameplayTimerColor + ' w-40 h-16 m-2 border-2 rounded-2xl col-span-2'
        }>
        {!props.state.gameplayTimerRunning && 'Start'}
        {props.state.gameplayTimerRunning && 'Stop'}
        <br />
        <span className="font-mono">{time}</span>
      </button>
      <Button onClick={toggleEdit}>{isEdit ? '>' : 'Edit'}</Button>
    </form>
  );
}

function PlusButton(props: any) {
  const amount = props.amount || 1;

  const add = () => {
    props.onClick(amount);
  };

  return (
    <>
      <Button onClick={add}>
        {props.children}
        {props.children && <br />}
        <span className="font-mono">
          {amount > 0 && `+${amount}`}
          {amount <= 0 && amount}
        </span>
      </Button>
    </>
  );
}
