import React, { useState } from "react";
import axios from 'axios';

import './index.css'

export default function Home(){

  const [query, setQuery] = useState('');
  let books = null;

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("Query: " + query);

    axios.request({
      method: 'get',
      url: 'https://www.googleapis.com/books/v1/volumes?q=' + query
    }).then((response) => {
      books = response.data;
      console.log("Books: ", books);
    }).catch((error) => {
      console.log(error);
    });
  }

  return(
    <div className="container">

      <div className="search">

        <p>Busque por um livro</p>
        <form onSubmit={ handleSubmit }>
          <input
            id="query"
            type="query"
            placeholder="Nichiren Daishonin"
            onChange={ event => setQuery(event.target.value) }
          />
          <button className="btn" type="submit">Pesquisar</button>
        </form>

      </div>

      <div className="results">
        <p>Os resultados aparecerão aqui :)</p>
      </div>

    </div>
  );
}