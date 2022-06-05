const Card = ({character}) => {
    return <div className="bg-slate-600 w-72 m-4">
        <img src={character.image} className="object-cover h-72 w-full object-top"></img>
        <h1 className="h-12 text-xl text-center p-2 text-gray-200">{character.name}</h1>
    </div>
}

export default Card;