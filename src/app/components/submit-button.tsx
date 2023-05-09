import Image from 'next/image';

export default function SubmitButton(props: any) {
  return (
    <button>
      <Image
        src="/noun-check-4110296.svg"
        alt="Submit"
        width="64"
        height="64"
      />
    </button>
  );
}
