import React from "react";

import './index.css'

import {Link} from "react-router-dom";

function Favorites(){

  const favorites = JSON.parse(localStorage.getItem('favEntries')) || [];
  const entries = Object.entries(favorites);

  return (

    <div className="results">

      <Link to={'/'}>
        <button className="home-button">Início</button>
      </Link>
      {
        favorites ? (

          entries.map(entry => {
            let id = entry[1].id;
            let title = entry[1].title;
            console.log("iter: ", entry);

            return(
              <div className="books">
                <Link to={`/bookDetails?book_id=${id}`}>
                  <button> Detalhes</button>
                </Link>
                <p>{title}</p>
              </div>
            );

          })

        ) : null
      }
    </div>
  );
}

export default Favorites;