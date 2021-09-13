import React, { Component } from "react";
import Card from "./Card";

export default class PopularBattle extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      currentBattle: 0,
      loading: true,
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
  handleBattle() {
    this.setState({
      currentBattle: this.state.currentBattle + 2,
    });
  }
  render() {
    const { movies, currentBattle } = this.state;
    return (
      <div>
        <div className="h1 text-center p-3">Popular Movies</div>
        <div className="d-flex flex-wrap justify-content-evenly">
          {movies.length > 0 && currentBattle < movies.length && (
            <>
              <Card
                onClick={this.handleBattle.bind(this)}
                movie={movies[currentBattle]}
              ></Card>
              <Card
                onClick={this.handleBattle.bind(this)}
                movie={movies[currentBattle + 1]}
              ></Card>
            </>
          )}
          {currentBattle >= movies.length && (
            <div className="h2 text-danger">No more Movies</div>
          )}
        </div>
      </div>
    );
  }
}
