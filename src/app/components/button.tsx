export default function Button(props: any) {
  const handleClick = (e: any) => {
    e?.preventDefault();
    props.onClick();
  };

  return (
    <>
      <button
        onClick={(e) => handleClick(e)}
        className={
          (props.width ? props.width : 'w-16') +
          ' h-16 m-1 border-2 rounded-2xl'
        }>
        {props.children}
      </button>
    </>
  );
}
