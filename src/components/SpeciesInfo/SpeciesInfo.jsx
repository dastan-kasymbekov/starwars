import React from 'react';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const SpeciesInfo = () => {
  const {id} = useParams()
  const [specie, setSpecie] = useState({})
  useEffect(() => {
    axios(`https://swapi.dev/api/species/${id}`)
      .then((res) => {
        setSpecie(res.data)
      })
  }, [])


  return (
    <div>
      <img src={`https://starwars-visualguide.com/assets/img/species/${id}.jpg`}/>
      <div>{specie.name}</div>
        <ul>
          <li>Classification: {specie.classification}</li>
          <li>Designation: {specie.designation}</li>
          <li>Language: {specie.language}</li>
          <li>Avg Lifespan: {specie.average_lifespan} years</li>
          <li>Avg Height: {specie.average_height}cm</li>
          <li>Hair Color(s): {specie.hair_colors}</li>
          <li>Skin Color(s): {specie.skin_colors}</li>
          <li>Eye Color(s): {specie.eye_colors}</li>
        </ul>
    </div>
  );
};

export default SpeciesInfo;