import React from 'react';
import {Link} from "react-router-dom";
import './Homepage.css'
import characters from '../../assets/images/character.jpg'
import films from '../../assets/images/films.jpg'
import species from '../../assets/images/species.jpg'
import starships from '../../assets/images/starships.jpg'
import vehicles from '../../assets/images/vehicles.jpg'
import planets from '../../assets/images/planets.jpg'

const Homepage = () => {
  return (
    <div className="row">
      <div className="col-4">
        <Link to="/characters">
         <div className="titles-wrapper">
           <span className="card-titles">Characters</span>
         </div>
          <div className="category-item">
            <img src={characters} alt=""/>
          </div>
        </Link>
      </div>
      <div className="col-4">
        <Link to="/films">
          <div className="titles-wrapper">
            <span className="card-titles">Films</span>
          </div>
          <div className="category-item">
            <img src={films} alt=""/>
          </div>
        </Link>
      </div>
      <div className="col-4">
        <Link to="/species">
          <div className="titles-wrapper">
            <span className="card-titles">Species</span>
          </div>
          <div className="category-item">
            <img src={species} alt=""/>
          </div>
        </Link>
      </div>
      <div className="col-4">
        <Link to="/starships">
          <div className="titles-wrapper">
            <span className="card-titles">Starships</span>
          </div>
          <div className="category-item">
            <img src={starships} alt=""/>
          </div>
        </Link>
      </div>
      <div className="col-4">
        <Link to="vehicles">
          <div className="titles-wrapper">
            <span className="card-titles">Vehicles</span>
          </div>
          <div className="category-item">
            <img src={vehicles} alt=""/>
          </div>
        </Link>
      </div>
      <div className="col-4">
        <Link to="/planets">
          <div className="titles-wrapper">
            <span className="card-titles">Planets</span>
          </div>
          <div className="category-item">
            <img src={planets} alt=""/>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;