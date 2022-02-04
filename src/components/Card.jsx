import { Link } from "react-router-dom"

const Card = ({character, user}) => {
  return (
    <Link to={`/fiche/${user}/${character.id}`} className="container_card">
      <div className="cadre_character">
        <img src={character.avatar ? character.avatar : "https://i.pinimg.com/originals/21/d0/57/21d0574f8447cac27a46fb066cab1926.jpg"} alt="avatar" />
      </div>
      <p>{character.name}</p>

    </Link>
  )
}

export default Card