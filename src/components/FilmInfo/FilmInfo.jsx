import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const FilmInfo = () => {
  const {id} = useParams()
  const [film, setFilm] = useState({})
  useEffect(() => {
    axios(`https://swapi.dev/api/films/${id}`)
      .then((res) => {
        setFilm(res.data)
      })
  }, [])


  return (
    <div>
      <img src={`https://starwars-visualguide.com/assets/img/films/${id}.jpg`}/>
      <div>
        {film.title}
      </div>
      {film.opening_crawl}
    </div>
  );
};

export default FilmInfo;






