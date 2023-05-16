import Button from './button';

/**
 * Component that accepts an `props.onClick` function to count numbers.
 * Defaults to `props.amount=1` if no amount is provided. When the given
 * amount is negative, the text is red.
 */
export default function PlusButton(props: any) {
  const amount = props.amount || 1;

  const add = () => {
    props.onClick(amount);
    console.debug(amount >= 0 ? 'adding' : 'subtracting', amount);
  };

  return (
    <>
      <Button onClick={add}>
        {props.children}
        {props.children && <br />}
        {amount > 0 && `+${amount}`}
        {amount <= 0 && amount}
      </Button>
    </>
  );
}
