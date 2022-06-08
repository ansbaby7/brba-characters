const CharacterInfo = (props) => {
  //console.log(props.data[0].name);
  const character = props.data[0];
  return (
    <div className="bg-stone-700 h-screen">
      <div className="text-gray-100 flex py-4">
        <img src={character.img} className="w-[350px] h-[500px] mx-16 my-10" />
        <div className="flex flex-col my-10 ">
          <h3 className="text-lg">
            Character Name: <span className="text-2xl mx-4">{character.name}</span>
          </h3>
          <h3 className="text-lg">
              Portrayed By: <span className="text-2xl mx-4">{character.portrayed}</span>
          </h3>
          <h3 className="text-lg">
              Also Known As: <span className="text-2xl mx-4">{character.nickname}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://breakingbadapi.com/api/characters");
  const characters = await res.json();
  const paths = characters.map((character) => {
    return {
      params: {
        characterId: character.char_id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const characterId = params.characterId;
  const res = await fetch(
    `https://www.breakingbadapi.com/api/characters/${characterId}`
  );
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}

export default CharacterInfo;
