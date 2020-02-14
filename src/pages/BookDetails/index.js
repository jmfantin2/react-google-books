import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import Loader from 'react-loader-spinner'

import './index.css'

function BookDetails() {
  const [bookId, setBookId] = useState('');
  const [book, setBook] = useState('');
  const [runAllowed, setRunAllowed] = useState(true);
  const query = new URLSearchParams(useLocation().search);

  const apiKey = 'AIzaSyChpjdeKEGzogkWe1UOwnYgY86x6MzFDHE';

  useEffect(() => {
    function retrieveBookId() {
      setBookId(query.get("book_id"));
    }
    retrieveBookId();
    loadVolume();
  });

  function loadVolume() {
    if(runAllowed) {
      axios.request({
        method: 'get',
        url: `https://www.googleapis.com/books/v1/volumes/${bookId}?key=${apiKey}`
      }).then((response) => {
        setRunAllowed(false);
        setBook(response.data);
      }).catch((error) => {
        console.log(error);
      });
    }
    console.log("[Workaround] Axios call locked if false: ", runAllowed);
  }

  return (
    <div className="container">
      {book === '' ? (
        <div className="loader">
          <Loader
            type="Puff"
            color="#fff"
            height={100}
            width={100}
          />
        </div>
      ) : (
        <div className="details-container">
          <h2>{book.volumeInfo.title}</h2>
          <div className="more-info">
            <div>
              <h3>{book.volumeInfo.authors}</h3>
              {book.volumeInfo.imageLinks.thumbnail === undefined ? null : (
              <header
                className="book-cover"
                style={{ backgroundImage: `url(${book.volumeInfo.imageLinks.thumbnail})` }}/>
              )}
            </div>
            <p>{book.volumeInfo.description}</p>
          </div>
          <div className="lowbar">
            <h4>Publicação: {book.volumeInfo.publishedDate}</h4>
            <h4>No de Páginas: {book.volumeInfo.pageCount}</h4>
            <button>Favoritar</button>
          </div>
        </div>
      )}
    </div>
  );

}

export default BookDetails;

/*
        let id = book.id;
        let title = book.volumeInfo.title;
        let thumbnail = book.volumeInfo.imageLinks.thumbnail;
        let categories = book.volumeInfo.categories;
        let authors = book.volumeInfo.authors;
        let publisher = book.volumeInfo.publisher;
        let description = book.volumeInfo.description;
        let pageCount = book.volumeInfo.pageCount;
        let publishedDate = book.volumeInfo.publishedDate;
        let averageRating = book.volumeInfo.averageRating;
        let buyLink = book.saleInfo.buyLink;
*/