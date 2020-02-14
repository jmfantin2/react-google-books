import React, { Component } from "react";
import axios from 'axios';

import './index.css'

import BookList from "../../components/BookList";

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      query: '',
    };
  }

  getBooks() {
    //const apiKey = 'AIzaSyChpjdeKEGzogkWe1UOwnYgY86x6MzFDHE' :(
    //appending it (?key=${apiKey}) to the url will break the request (e400)
    const query = this.state.query;
    axios.request({
      method: 'get',
      url: `https://www.googleapis.com/books/v1/volumes?q=${query}`
    }).then((response) => {
      this.setState({books: response.data.items}, () => {
        console.log('State: ', this.state);
      })
    }).catch((error) => {
      console.log(error);
    });
  }

  handleTextChange(event) {
    this.setState({ query: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    console.log("Query: " + this.state.query);
    await this.getBooks();
  }

  render() {

    return (
      <div className="container">

        <div className="search">

          <p>Busque por um livro</p>
          <form onSubmit={ event => this.handleSubmit(event) }>
            <input
              id="query"
              type="query"
              placeholder="Insira aqui seus termos de busca :)"
              onChange={event => this.handleTextChange(event)}
              value={this.state.query}
            />
            <button className="btn" type="submit">Pesquisar</button>
          </form>

        </div>

        <div className="results">
          {
            this.state.books === undefined ? (
              <h3>Não há resultados para sua busca :(</h3>
            ) : (
              this.state.books.length === 0 ? (
                <h3>Os resultados aparecerão aqui :)</h3>
              ) : (
                <BookList books={Array.from(this.state.books)}/>
              )
            )
          }
        </div>

      </div>
    );
  }
}

export default Home;