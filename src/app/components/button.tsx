export default function Button(props: any) {
  return (
    <>
      <button
        onClick={props.onClick}
        className="w-16 h-16 m-2 border-2 rounded-2xl">
        {props.children}
      </button>
    </>
  );
}
