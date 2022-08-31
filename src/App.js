import React, { Component } from "react";
import "./App.css";
import Header from "./Component/Header";
import SinglePlayer from "./Component/SinglePlayer/SinglePlayer";
import MultiPlayer from "./Component/Multiplayer/MultiPlayer";
import AboutUs from "./Component/AboutUs";
import { Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <SinglePlayer />
              </>
            }
          />
          <Route
            path="/SinglePlayer"
            element={
              <>
                <Header />
                <SinglePlayer />
              </>
            }
          />
          <Route
            path="/MultiPlayer"
            element={
              <>
                <Header />
                <MultiPlayer />
              </>
            }
          />
          <Route
            path="/AboutUs"
            element={
              <>
                <Header />
                <AboutUs />
              </>
            }
          ></Route>
        </Routes>
      </div>
    );
  }
}
