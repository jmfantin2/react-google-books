import React, { useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';

import './index.css'

function BookDetails () {
  const [bookId, setBookId] = useState('');
  const query = new URLSearchParams(useLocation().search);

  useEffect(() => {
    function retrieveBookId() {
      setBookId(query.get("book_id"));
    }
    retrieveBookId();
    getVolume();
  });

  function getVolume() {
    axios.request({
      method: 'get',
      url: 'https://www.googleapis.com/books/v1/volumes/' + bookId
    }).then((response) => {
      console.log('Response: ', response);
    }).catch((error) => {
      console.log(error);
    });
  }

  return(
    <div>
      <h1>BookDetails</h1>
    </div>
  );
}

export default BookDetails;