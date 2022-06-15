const CharacterInfo = ({ character }) => {
  return (
    <div className="bg-stone-200 font-poppins min-h-[70vh]">
      <div className="text-gray-800 flex flex-col items-center md:items-start md:flex-row p-4 ">
        <img src={character.img} className=" md:mr-8 w-96 md:w-72" />
        {/* w-[350px] h-[500px]  */}

        <div className="flex flex-col xl:justify-center w-80 md:w-full">
          <h3 className="text-[20px] uppercase">Character Name: <span className="block xl:inline text-[24px] font-bold uppercase">{character.name}</span></h3>
          {character.portrayed!=="Unknown" && <h3 className="text-[20px] uppercase">Portrayed By: <span className=" block xl:inline text-[24px] font-bold uppercase">{character.portrayed}</span></h3>}
          <h3 className="text-[20px] uppercase">Also Known As: <span className=" block xl:inline text-[24px] font-bold uppercase">{character.nickname}</span></h3>
          {character.birthday!=="Unknown" && <h3 className="text-[20px] uppercase">Birthday: <span className=" block xl:inline text-[24px] font-bold uppercase">{character.birthday}</span></h3>}
          <h3 className="text-[20px] uppercase">Occupation: {character.occupation.map((item,index)=>(<span key={index} className=" block xl:inline text-[24px] font-bold uppercase"> {item}</span>))}</h3>
        </div>

        
      </div>
    </div>
  );
};

export default CharacterInfo;
