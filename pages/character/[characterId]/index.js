import CharacterInfo from "../../../components/content/CharacterInfo";

const CharacterDetail = (props) => {
  //console.log(props.data[0].name);
  const character = props.data[0];
  return (
    <div className="bg-stone-700 p-8">
      <CharacterInfo character={character}/>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://www.breakingbadapi.com/api/characters?category=Breaking+Bad");
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

export default CharacterDetail;
