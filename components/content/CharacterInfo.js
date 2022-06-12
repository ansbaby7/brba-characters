const CharacterInfo = ({ character }) => {
  return (
    <div className="bg-stone-200 h-screen md:h-auto md:max-h-screen">
      <div className="text-gray-800 flex flex-col items-center md:items-start md:flex-row p-4">
        <img src={character.img} className=" md:mr-8 w-64" />
        {/* w-[350px] h-[500px]  */}

        <div className="w-full flex flex-col xl:justify-center">
          <h3 className="text-lg h-12 my-2 xl:my-0">Character Name: <span className="block xl:inline text-[22px] bg-stone-700 text-gray-200 px-4 xl:py-1">{character.name}</span></h3>
          <h3 className="text-lg h-12 my-2 xl:my-0">Portrayed By: <span className=" block xl:inline text-[22px] bg-stone-700 text-gray-200 px-4 xl:py-1">{character.portrayed}</span></h3>
          <h3 className="text-lg h-12 my-2 xl:my-0">Also Known As: <span className=" block xl:inline text-[22px] bg-stone-700 text-gray-200 px-4 xl:py-1">{character.nickname}</span></h3>
          <h3 className="text-lg h-12 my-2 xl:my-0">Occupation: {character.occupation.map(item=>(<span className=" block xl:inline text-[22px] bg-stone-700 text-gray-200 px-4 xl:py-1 mb-2 xl:mb-0  xl:mr-2">{item} </span>))}</h3>
        </div>

        {/* <div className="flex">
            
            <div className="mr-8 text-xl uppercase leading-[42px]">
                <h3>Character Name:</h3>
                <h3>Portrayed By:</h3>
                <h3>Also Known As:</h3>
                <h3>Occupation:</h3>
            </div>

            <div className="text-2xl uppercase leading-[41px]">  
                <h2>{character.name}</h2>
                <h2>{character.portrayed}</h2>
                <h2>{character.nickname}</h2>
                <h2>{character.occupation}</h2>
            </div>
        </div> */}
      </div>
    </div>
  );
};

export default CharacterInfo;
