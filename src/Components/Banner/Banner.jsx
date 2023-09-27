import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../axios";
import { API_KEY, imageurl } from "../../Constants/Constants";

function Banner() {
  const [movie, setmovie] = useState();
  useEffect(() => {
    const getrandom = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((responce) => {
        console.log(responce.data.results[0]);
        setmovie(responce.data.results[getrandom(0, 19)]);
      });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageurl + movie.backdrop_path : ""})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
