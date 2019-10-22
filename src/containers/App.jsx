import React, { useState, useEffect } from "react";
import Header from "../componet/Header";
import Search from "../componet/Search";
import Categorias from "../componet/Categorias";
import Carousel from "../componet/Carousel";
import Carouselitem from "../componet/Carouselitem";
import Footer from "../componet/Footer";
import useInitialState from "../assets/hooks/useinitialState";

import "../assets/styles/App.scss";
const API = "http://localhost:3000/initalState";
const App = () => {
  const initialState = useInitialState(API);
  return (
    <div className="App">
      <Header />
      <Search />
      {initialState.mylist.length > 0 && (
        <Categorias title="Mi lista">
          <Carousel>
            <Carouselitem />
          </Carousel>
        </Categorias>
      )}

      <Categorias title="Tendencias">
        <Carousel>
          {initialState.trends.map(item => (
            <Carouselitem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categorias>

      <Categorias title="Originales">
        <Carousel>
          {initialState.originals.map(items => (
            <Carouselitem key={items.id} {...items} />
          ))}
        </Carousel>
      </Categorias>
      <Footer />
    </div>
  );
};

export default App;
