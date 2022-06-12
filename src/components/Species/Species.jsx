import React from 'react';
import {useEffect, useState} from "react"
import axios from "axios";
import Spinner from "../Spinner";
import {Link} from "react-router-dom";

const Species = () => {
  const [species, setSpecies] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(0)

  useEffect(() => {
    axios(`https://swapi.dev/api/species/?page=${page + 1}`)
      .then((res) => {
        setSpecies(res.data)
        setIsLoading(false)
      })
  }, [page])

  if (isLoading) {
    return <Spinner />
  }


  return (
    <div>
      <div className="pagination">
        {
          Array(Math.ceil(species.count / 10)).fill(0).map((buttonNum, idx) => (
            <button key={idx} className="pagination-btn" onClick={() => setPage(idx)}>{idx + 1}</button>
          ))
        }
      </div>
      <div className="row">
        {
          species?.results.map((specie, index) => (
            <div key={index} className="item-col">
              <Link to={`/species/${index + 1}`}>
              <div className="element-item">
                <img src={`https://starwars-visualguide.com/assets/img/species/${10 * page + index + 1}.jpg`}
                     alt=""
                     className="element-img"/>
                <h4>{specie.name}</h4>
              </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Species;