interface ButtonProps {
  number?: string;
  onclick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ number = "0" ,onclick}:ButtonProps) {
    return (
      <button onClick={onclick} className="bg-black w-14 h-14 rounded-lg hover:bg-[#F4C1C0] drop-shadow-lg cursor-pointer text-white">
        <p>{number}</p>
      </button>
    );
  }