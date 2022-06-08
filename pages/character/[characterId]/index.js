
const CharacterInfo = (props) => {
    //console.log(props.data[0].name);
    return <div>{props.data[0].name}</div>
}

export async function getStaticPaths(){
    const res = await fetch("https://breakingbadapi.com/api/characters");
    const characters = await res.json();
    const paths = characters.map(character =>{ return {params:{
        characterId:character.char_id.toString()
    }}})
    return {
        paths,
        fallback:false
    }
}

export async function getStaticProps({params}){
    const characterId = params.characterId;
    const res = await fetch(`https://www.breakingbadapi.com/api/characters/${characterId}`);
    const data = await res.json();

    return {
        props: {
            data:data
        }
    }
}

export default CharacterInfo;