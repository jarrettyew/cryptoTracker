import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
  Navbar,
  Exchanges,
  Cryptocurrencies,
  News,
  HomePage,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/exchanges" element={<Exchanges />} />
                <Route
                  exact
                  path="/cryptocurrencies"
                  element={<Cryptocurrencies />}
                />
                <Route exact path="/news" element={<News />} />
              </Routes>
            </div>
          </Layout>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
};

export default App;
