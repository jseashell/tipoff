import Image from 'next/image';

export default function CancelButton(props: any) {
  return (
    <button>
      <Image
        src="/noun-wrong-4110300.svg"
        alt="Cancel"
        width="64"
        height="64"
      />
    </button>
  );
}
