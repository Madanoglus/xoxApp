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
        <Header />
        <Routes>
          <Route path="/SinglePlayer" element={<SinglePlayer />} />
          <Route path="/MultiPlayer" element={<MultiPlayer />} />
          <Route path="/AboutUs" element={<AboutUs />}></Route>
        </Routes>
      </div>
    );
  }
}
