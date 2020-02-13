import React, {Component} from "react";
import { Link } from 'react-router-dom'
import './index.css';

class BookList extends Component {
  render() {
    let bookItems;
    if (this.props.books) {
      bookItems = this.props.books.map(book => {
        let id = book.id;
        let title = book.volumeInfo.title;
        return (
          <div className="books">
            <Link to={`/bookDetails?book_id=${id}`}>
              <button> Detalhes </button>
            </Link>
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