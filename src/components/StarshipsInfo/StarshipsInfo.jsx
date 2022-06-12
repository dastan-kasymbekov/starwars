import React from 'react';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const StarshipsInfo = () => {
  const {id} = useParams()
  const [starship, setStarship] = useState({})
  useEffect(() => {
    axios(`https://swapi.dev/api/starships/${id}`)
      .then((res) => {
        setStarship(res.data)
      })
  }, [])


  return (
    <div>
      <img src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}/>
      <div>{starship.name}</div>
      <ul>
        <li>Model: {starship.model}</li>
        <li>Manufacturer: {starship.manufacturer}</li>
        <li>Class: {starship.starship_class}</li>
        <li>Cost: {starship.cost_in_credits} credits</li>
        <li>Speed: {starship.max_atmosphering_speed}</li>
        <li>Hyperdrive Rating: {starship.hyperdrive_rating}</li>
        <li>MGLT: {starship.MGLT}</li>
        <li>Length: {starship.length}m</li>
        <li>Cargo Capacity: {starship.cargo_capacity} metric tons</li>
        <li>Mimimum Crew: {starship.crew}</li>
        <li>Passengers: {starship.passengers}</li>
      </ul>
    </div>
  );
};

export default StarshipsInfo