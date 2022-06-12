import React from 'react';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const VehiclesInfo = () => {
  const {id} = useParams()
  const [vehicle, setVehicle] = useState({})
  useEffect(() => {
    axios(`https://swapi.dev/api/vehicles/${id}`)
      .then((res) => {
        setVehicle(res.data)
      })
  }, [])


  return (
    <div>
      <img src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`}/>
      <div>{vehicle.name}</div>
      <ul>
        <li>Model: {vehicle.model}</li>
        <li>Manufacturer: {vehicle.manufacturer}</li>
        <li>Class: {vehicle.starship_class}</li>
        <li>Cost: {vehicle.cost_in_credits} credits</li>
        <li>Speed: {vehicle.max_atmosphering_speed}</li>
        <li>Length: {vehicle.length}m</li>
        <li>Cargo Capacity: {vehicle.cargo_capacity} metric tons</li>
        <li>Mimimum Crew: {vehicle.crew}</li>
        <li>Passengers: {vehicle.passengers}</li>
      </ul>
    </div>
  );
};

export default VehiclesInfo;