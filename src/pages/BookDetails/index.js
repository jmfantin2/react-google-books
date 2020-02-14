import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import axios from 'axios';

import Loader from 'react-loader-spinner'
import './index.css'

function BookDetails() {
  const [bookId, setBookId] = useState('');
  const [book, setBook] = useState('');
  const [run, setRun] = useState(true);
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
    if(run) {
      axios.request({
        method: 'get',
        url: `https://www.googleapis.com/books/v1/volumes/${bookId}?key=${apiKey}`
      }).then((response) => {
        setRun(false);
        setBook(response.data);
      }).catch((error) => {
        console.log(error);
      });
    }
    console.log("[Workaround] Axios call locked if false: ", run);
  }


  return(
    <div className="results">
      {book === '' ? (
        <div>
          <Loader
            type="Puff"
            color="#fd7100"
            height={100}
            width={100}
          />
        </div>
      ) : (
        <div>
          <h1>{book.volumeInfo.title}</h1>
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