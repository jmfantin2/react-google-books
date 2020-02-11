import React from "react";

import './index.css'

export default function Home(){
  return(
    <div className="container">

      <div className="content">

        <p>Busque por um livro</p>
        <form>
          <input
            id="query"
            type="query"
            placeholder="Nichiren Daishonin"
          />
          <button className="searchBtn" type="submit">Pesquisar</button>
        </form>

      </div>

    </div>
  );
}