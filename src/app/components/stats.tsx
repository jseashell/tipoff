export default function Stats(props: any) {
  return (
    <>
      <ul className="flex">
        <li>
          <Stat name="PTS" value={props.data.pts} />
        </li>
        <li>
          <Stat name="FGM" value={props.data.fgm} />
        </li>
        <li>
          <Stat name="FGA" value={props.data.fga} />
        </li>
        <li>
          <Stat name="3PM" value={props.data.tpm} />
        </li>
        <li>
          <Stat name="3PA" value={props.data.tpa} />
        </li>
        <li>
          <Stat name="FTM" value={props.data.ftm} />
        </li>
        <li>
          <Stat name="FTA" value={props.data.fta} />
        </li>
      </ul>
      <ul className="flex">
        <li>
          <Stat name="OREB" value={props.data.oreb} />
        </li>
        <li>
          <Stat name="DREB" value={props.data.dreb} />
        </li>
        <li>
          <Stat name="AST" value={props.data.ast} />
        </li>
        <li>
          <Stat name="STL" value={props.data.stl} />
        </li>
        <li>
          <Stat name="BLK" value={props.data.blk} />
        </li>
        <li>
          <Stat name="TOV" value={props.data.tov} />
        </li>
        <li>
          <Stat name="PF" value={props.data.pf} />
        </li>
      </ul>
    </>
  );
}

function Stat(props: any) {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="w-full p-2 border-b-4 text-center">{props.name}</span>
      <span className="w-full p-2 border-b-2 text-center font-bold">
        {props.value}
      </span>
    </div>
  );
}
