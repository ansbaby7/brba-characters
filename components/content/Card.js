const Card = ({character}) => {
    return <div className="bg-slate-600 w-72 m-4">
        <img src={character.img} className="object-cover h-96 w-full"></img>
        <h1 className="h-12 text-xl text-center p-2 text-gray-200">{character.name}</h1>
    </div>
}

export default Card;