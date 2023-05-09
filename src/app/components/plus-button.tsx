import Button from './button';

export default function PlusButton(props: any) {
  const add = () => {
    console.debug('plus button adding', props.amount);
    props.onClick(props.amount);
  };

  return (
    <>
      <Button onClick={add}>
        {props.children}
        {props.children && <br />}
        {!props.amount && `+1`}
        {props.amount > 0 && `+${props.amount}`}
        {props.amount < 0 && props.amount}
      </Button>
    </>
  );
}
