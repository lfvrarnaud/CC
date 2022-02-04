import { Link } from "react-router-dom"

const Card = ({character, user}) => {
  return (
    <Link to={`/personage/${user}/${character.id}`} className="container_card">
      <div className="cadre_character">
        <img src={character.avatar} alt="avatar" />
      </div>
      <p>{character.name}</p>

    </Link>
  )
}

export default Card