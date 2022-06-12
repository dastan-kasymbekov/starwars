import React from 'react';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const CharactersInfo = () => {
  const {id} = useParams()
  const [people, setPeople] = useState({})
  useEffect(() => {
    axios(`https://swapi.dev/api/people/${id}`)
      .then((res) => {
        setPeople(res.data)
      })
  }, [])


  return (
    <div>
      <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>
      <div>
        {people.name}
      </div>
      <ul>
        <li>Birth Year: {people.birth_year}</li>
        <li>Species: {people.species}</li>
        <li>Height: {people.height}cm</li>
        <li>Mass: {people.mass}kg</li>
        <li>Gender: {people.gender}</li>
        <li>Hair Color: {people.hair_color}</li>
        <li>Skin Color: {people.skin_color}</li>
        <li>Homeworld: {people.homeworld}</li>
      </ul>
    </div>
  );
};

export default CharactersInfo;