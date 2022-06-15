import Link from "next/link";

const Card = ({ character }) => {
  return (
    <Link href={`/character/${character.char_id}`}>
      <a>
        <div className="bg-slate-600  border-2 rounded-xl w-72 m-4 hover:scale-105 transition duration-500">
          <img
            src={character.img}
            className=" rounded-t-xl object-cover  object-top h-72 w-72"
          />
          <h1 className="h-12 text-xl text-center p-2 text-gray-200">
            {character.name}
          </h1>
        </div>
      </a>
    </Link>
  );
};

export default Card;
