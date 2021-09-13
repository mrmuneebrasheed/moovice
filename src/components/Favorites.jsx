import React, { Component } from "react";
import Card from "./Card";

export default class Favorites extends Component {
  constructor() {
    super();
    this.state = { movies: [], favIDs: this.getStorage() || [] };
  }
  getStorage() {
    return JSON.parse(localStorage.getItem("favorites"));
  }
  getMovie(id) {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=e244ada1553937093a18263c9d2f0169
`)
      .then((res) => res.json())
      .then((res) => this.setState({ movies: [...this.state.movies, res] }));
  }
  componentDidMount() {
    this.state.favIDs.map((id) => this.getMovie(id));
    console.log(this.state.favIDs, this.state.movies);
  }
  clearFavorites() {
    localStorage.clear();
    this.setState({ movies: [] });
  }
  render() {
    const { movies } = this.state;
    return (
      <div>
        <div className="h1 text-center bg-light p-3">Favorites</div>
        <button
          onClick={this.clearFavorites.bind(this)}
          className="btn btn-danger"
        >
          Clear Favorites
        </button>
        <div className="d-flex flex-wrap justify-content-evenly">
          {movies.length > 0 &&
            movies.map((movie) => <Card key={movie.id} movie={movie}></Card>)}
        </div>
      </div>
    );
  }
}
