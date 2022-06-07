import Card from "./Card";

// const characters = [
//   { name: "Jesse Pinkman",image:"https://upload.wikimedia.org/wikipedia/en/c/c6/Jesse_Pinkman_S5B.png", id: 1 },
//   { name: "Walter White",image:"https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png", id: 2 },
// ];

const Grid = ({ characters }) => {
  return (
    <div className='bg-[#29773E] w-full'>
      <div className="py-4 px-2 justify-items-center  grid sm:grid-cols-2 lg:grid-cols-3 w-full xl:grid-cols-4">
        {characters.map((character) => (
          <Card character={character} key={character.char_id} />
        ))}
      </div>
    </div>
  );
};

export default Grid;
