import React, { Component } from "react";
import styled from "styled-components";

export default class Card extends Component {
  componentDidMount() {
    fetch(`https://image.tmdb.org/t/p/w300/${this.props.movie.poster_path}`);
  }
  render() {
    const Card = styled.button`
      & {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 20%;
        border: 1px solid black;
        min-height: 50vh;
        margin: 10px;
        box-shadow: 0 0 10px 10px black;
        transition: all 50ms linear;
      }
      &:hover {
        transform: scale(1.1);
      }
    `;
    return (
      <Card>
        <div onClick={this.props.onClick}>
          <img
            width="100%"
            height="auto"
            src={`https://image.tmdb.org/t/p/w300/${this.props.movie.poster_path}`}
            alt="Movie"
          />
          <div className="h3 p-2 text-primary">{this.props.movie.title}</div>
          <div className="h4 p-2 text-danger">
            {this.props.movie.release_date}
          </div>
          <div className="h-6 p-2 text-dark">{this.props.movie.overview}</div>
        </div>
        <div
          onClick={() => this.props.addFavorite(this.props.movie.id)}
          className="btn btn-primary"
        >
          Favorites
        </div>
      </Card>
    );
  }
}
