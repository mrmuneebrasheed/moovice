import moment from "moment";
import React, { Component } from "react";
import Card from "./Card";

export default class Weekly extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      favorites: JSON.parse(localStorage.getItem("favorites")) || [],
    };
  }
  componentDidMount() {
    fetch(
      `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${moment()
        .subtract(7, "d")
        .format("YYYY-MM-DD")}&primary_release_date.lte=${moment().format(
        "YYYY-MM-DD"
      )}&api_key=e244ada1553937093a18263c9d2f0169
`
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({ movies: res.results });
      });
  }
  addFavorite(id) {
    this.setState({ favorites: [...this.state.favorites, id] });
    localStorage.setItem(
      "favorites",
      JSON.stringify([...this.state.favorites, id])
    );
  }
  render() {
    console.log(moment().subtract(7, "d"));
    return (
      <div>
        <div className="h1 text-center p-3">Weekly Movies</div>
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
