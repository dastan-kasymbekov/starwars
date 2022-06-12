import React from 'react';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const PlanetsInfo = () => {
  const {id} = useParams()
  const [planet, setPlanet] = useState({})
  useEffect(() => {
    axios(`https://swapi.dev/api/planets/${id}`)
      .then((res) => {
        setPlanet(res.data)
      })
  }, [])


  return (
    <div>
      <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
      <div>{planet.name}</div>
      <ul>
        <li>Population: {planet.population}</li>
        <li>Rotation period: {planet.rotation_period} days</li>
        <li>Orbitalperiod: {planet.orbital_period} days</li>
        <li>Diameter: {planet.diameter}km</li>
        <li>Gravity Rating: {planet.gravity} Standard</li>
        <li>Terrain: {planet.terrain}</li>
        <li>Surface water: {planet.surface_water}%</li>
        <li>Climate: {planet.climate}</li>
      </ul>
    </div>
  );
};

export default PlanetsInfo;