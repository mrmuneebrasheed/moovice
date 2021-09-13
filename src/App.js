import React, { Component } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Weekly from "./components/Weekly";
import Home from "./components/Home";
import Popular from "./components/Popular";
import PopularBattle from "./components/PopularBattle";
import Favorites from "./components/Favorites";
import WeeklyBattle from "./components/WeeklyBattle";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  render() {
    const Container = styled.div`
      align-items: center;
    `;
    const NavBar = styled.div`
      & {
        display: flex;
        justify-content: space-between;
        list-style: none;
        padding: 10px;
        background: linear-gradient(grey, black);
        color: white;
        width: 100%;
      }
      & li {
        color: white;
        font-size: 2rem;
        text-decoration: none;
        margin: 5px;
        align-self: flex-end;
        transition: all 100ms linear;
      }
      & li:hover {
        transform: scale(1.2);
        color: green;
      }
      & ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        list-style: none;
      }
    `;
    return (
      <BrowserRouter>
        <Container>
          <NavBar>
            <div className="h1 p-3 bg-dark">Moovice</div>
            <ul className="">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/weekly">
                <li>Weekly</li>
              </Link>
              <Link to="/weekly-battle">
                <li>WeeklyBattle</li>
              </Link>
              <Link to="/popular">
                <li>Popular</li>
              </Link>
              <Link to="/popular-battle">
                <li>PopularBattle</li>
              </Link>
              <Link to="/favorites">
                <li>Favorites</li>
              </Link>
            </ul>
          </NavBar>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/weekly" component={Weekly}></Route>
            <Route path="/weekly-battle" component={WeeklyBattle}></Route>
            <Route path="/popular" component={Popular}></Route>
            <Route path="/popular-battle" component={PopularBattle}></Route>
            <Route path="/favorites" component={Favorites}></Route>
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
}
