const CharacterInfo = ({character}) => {
  return (
    <div className="bg-stone-200 overflow-hidden ">
      <div className="text-gray-800 flex flex-col md:flex-row p-4">
        <img src={character.img} className="w-64 mr-8" />
        {/* w-[350px] h-[500px]  */}
        <div className="flex">
            <div className="mr-8 text-xl uppercase leading-[42px]">
                <h3>Character Name:</h3>
                <h3>Portrayed By:</h3>
                <h3>Also Known As:</h3>
                {/* <h3>Occupation:</h3> */}
            </div>

            <div className="text-2xl uppercase leading-[41px]">  
                <h2>{character.name}</h2>
                <h2>{character.portrayed}</h2>
                <h2>{character.nickname}</h2>
                {/* <h2>{character.occupation}</h2> */}
            </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;
