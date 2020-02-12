import React, {Component} from "react";

import './index.css';

class BookList extends Component {
  render() {
    let bookItems;
    if (this.props.books) {
      bookItems = this.props.books.map(book => {
        let id = book.id;
        let title = book.volumeInfo.title;
        // let thumbnail = book.volumeInfo.imageLinks.thumbnail;
        let categories = book.volumeInfo.categories;
        let authors = book.volumeInfo.authors;
        let publisher = book.volumeInfo.publisher;
        let description = book.volumeInfo.description;
        let pageCount = book.volumeInfo.pageCount;
        let publishedDate = book.volumeInfo.publishedDate;
        let averageRating = book.volumeInfo.averageRating;
        let buyLink = book.saleInfo.buyLink;
        return (
          <div className="books">
            <button> Detalhes </button>
            <p>{title}</p>
          </div>
        )
      });
    }
    return (
      <div>
        <p>
          {bookItems}
        </p>
      </div>
    );
  }
}

export default BookList;

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

        <div>
          <ul className="book-list">
            {books.map(book => (
              <li key={book.id}>
                <header style={{ backgroundImage: book.volumeInfo.imageLinks.thumbnail }}/>
                <strong>{book.volumeInfo.title}</strong>
                <span>{book.volumeInfo.authors}</span>
              </li>
            ))}
          </ul>
        </div>
 */