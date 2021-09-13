import React, { Component } from "react";
import Card from "./Card";

export default class Popular extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    };
  }
  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e244ada1553937093a18263c9d2f0169"
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({ movies: res.results });
      });
  }
  addFavorite(id) {
    this.setState({ favorites: [...this.state.favorites, id] });
    localStorage.setItem("favorites", JSON.stringify(1));
  }
  render() {
    console.log(this.state.favorites);
    return (
      <div>
        <div className="h1 text-center p-3">Popular Movies</div>
        <div className="d-flex flex-wrap justify-content-evenly">
          {this.state.movies.map((movie) => (
            <Card
              addFavorite={this.addFavorite.bind(this)}
              key={movie.id}
              movie={movie}
            ></Card>
          ))}
        </div>
      </div>
    );
  }
}
