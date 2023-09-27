import React, { useEffect, useState } from "react";
import "./Rowpost.css";
import axios from "../../axios";
import { imageurl } from "../../Constants/Constants";
import YouTube from "react-youtube";
import { API_KEY } from "../../Constants/Constants";

const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    autoplay: 0,
  },
};

function Rowpost(props) {
  const [video, setvideo] = useState("");
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    axios.get(props.url).then((res) => {
      setmovies(res.data.results);
    });
  }, []);
  const handleclick = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then((res) => {
      res.data.results.length !== 0
        ? setvideo(res.data.results[0])
        : console.log("movie trailer link not found...");
    });
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            className={props.isSmall ? "smallPoster" : "poster"}
            src={`${imageurl + obj.backdrop_path}`}
            alt=""
            onClick={() => handleclick(obj.id)}
          />
        ))}
      </div>
      {video.length != 0 ? (
        <YouTube opts={opts} videoId={video.key}></YouTube>
      ) : (
        ""
      )}
    </div>
  );
}

export default Rowpost;
