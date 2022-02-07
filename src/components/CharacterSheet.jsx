import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import Input from "./Input";
import Textarea from "./Textarea";
import { fetchCharacterById, deleteCharacter } from "../services/api";

const CharacterSheet = () => {
  const { user_id, id } = useParams();
  let navigate = useNavigate();
  const [character, setCharacter] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);

  const setData = async () => {
    setCharacter(await fetchCharacterById(user_id, id));
    SetIsLoading(false);
  };

  const onDelete = async () => {
    await deleteCharacter(character.id);
    navigate(`/compte/${user_id}`);
  };

  useEffect(() => {
    setData();
  }, []);
  console.log(character);
  return (
    <>
      {!isLoading ? (
        <div className="bg_character bg_paper">
          <div className="container_form">
            <div>
              <div className="container_block_form">
                <div className="block_form">
                  <div className="cadre_character">
                    <img
                      src={
                        character.avatar
                          ? character.avatar
                          : "https://i.pinimg.com/originals/21/d0/57/21d0574f8447cac27a46fb066cab1926.jpg"
                      }
                    />
                  </div>
                </div>
                <div className="block_form">
                  <Input character={character.name} info="name" label="Nom :" />
                  <Input
                    character={character.level}
                    info="level"
                    label="Niveau : "
                  />
                </div>
                <div className="block_form">
                  <Input
                    character={character.race}
                    info="race"
                    label="Race :"
                  />
                  <Input
                    character={character.job}
                    info="job"
                    label="Classe :"
                  />
                </div>
                <div className="block_form">
                  <Input character={character.age} info="age" label="Age :" />
                  <Input
                    character={character.taille}
                    info="taille"
                    label="Taille :"
                  />
                </div>
              </div>
              <div className="container_block_form ">
                <div className="block_form">
                  <Textarea
                    character={character.feats}
                    extra="form_textarea_col"
                    info="feats"
                    label="Histoire :"
                  />
                </div>
                <div className="container_block_form flex_col">
                  <div className="flex container_block_form">
                    <div className="block_form">
                      <Input character={character.pv} info="pv" label="PV :" />
                      <Input
                        character={character.armor}
                        info="armor"
                        label="Armure :"
                      />
                      <Input
                        character={character.initiative}
                        info="initiative"
                        label="Initiative :"
                      />
                    </div>
                    <div className="block_form">
                      <Input
                        character={character.strength}
                        info="strength"
                        label="Force :"
                      />
                      <Input
                        character={character.dexterity}
                        info="dexterity"
                        label="Dexterité :"
                      />
                      <Input
                        character={character.constitution}
                        info="constitution"
                        label="Constitution :"
                      />
                    </div>
                    <div className="block_form">
                      <Input
                        character={character.intelligence}
                        info="intelligence"
                        label="Intelligence :"
                      />
                      <Input
                        character={character.wisdow}
                        info="wisdow"
                        label="Sagesse :"
                      />
                      <Input
                        character={character.charisma}
                        info="charisma"
                        label="Charisme : "
                      />
                    </div>
                  </div>
                  <div className="flex container_block_form">
                    <div className="block_form ">
                      <Textarea
                        character={character.skill}
                        info="skill"
                        label="Compétences :"
                      />
                    </div>
                    <div className="block_form ">
                      <Textarea
                        character={character.languages}
                        info="languages"
                        label="Langues :"
                      />
                    </div>
                    <div className="block_form ">
                      <Textarea
                        character={character.knowlegde}
                        info="knowlegde"
                        label="Connaissances :"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Link to={`/personnage/${user_id}/${id}`} type="submit">
                <button
                  className="red_button button"
                  className="red_button button"
                >
                  Modifier
                </button>
              </Link>
              <button
                className="red_button button"
                className="red_button button"
                onClick={onDelete}
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Chargement en cours...</p>
      )}
    </>
  );
};

export default CharacterSheet;
