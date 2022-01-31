import React, { useEffect, useState } from "react";
import "./Card.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Header from "./Header";
import { useParams } from "react-router-dom";

const Card = () => {
  const { imdbID } = useParams();

  const [movieInfo, setMovieInfo] = useState({});

  const detailURL = "http://www.omdbapi.com/?";

  useEffect(() => {
    async function fetchData() {
      const tempData = await axios.get(
        `${detailURL}i=${imdbID}&apikey=e4d6b0f2`
      );
      setMovieInfo(tempData.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className="info__mainBody">
        <div className="card mb-3 info__card">
          <div className="row g-0">
            <div className="col-md-4">
              {movieInfo && (
                <img
                  src={`${
                    movieInfo.Poster === "N/A"
                      ? "https://www.prokerala.com/movies/assets/img/no-poster-available.jpg"
                      : movieInfo.Poster
                  }`}
                  className="img-fluid rounded-start"
                  alt="Movie Poster"
                />
              )}
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="card-title">{movieInfo && movieInfo.Title}</h1>
                <div className="director">
                  <span className="heading">Director&nbsp;&nbsp;&nbsp;</span>
                  <span className="detail">{movieInfo.Director}</span>
                </div>
                <div className="director">
                  <span className="heading">Actors&nbsp;&nbsp;&nbsp; </span>
                  <span className="detail">{movieInfo.Actors}</span>
                </div>

                <div className="director">
                  <span className="heading">Box Office&nbsp;&nbsp;&nbsp; </span>
                  <span className="detail">{movieInfo.BoxOffice}</span>
                </div>
                <div className="director">
                  <span className="heading">Awards &nbsp;&nbsp;&nbsp;</span>
                  <span className="detail">{movieInfo.Awards}</span>
                </div>

                <div className="director">
                  <span className="heading">
                    Released on&nbsp;&nbsp;&nbsp;{" "}
                  </span>
                  <span className="detail">{movieInfo.Released}</span>
                </div>
                <div className="director">
                  <span className="heading">
                    IMDb Rating&nbsp;&nbsp;&nbsp;{" "}
                  </span>
                  <span className="detail">{movieInfo.imdbRating}</span>
                </div>
                <div className="director">
                  <span className="heading">Rated&nbsp;&nbsp;&nbsp; </span>
                  <span className="detail">{movieInfo.Rated}</span>
                </div>
                <div className="director">
                  <span className="heading">Type&nbsp;&nbsp;&nbsp; </span>
                  <span className="detail">{movieInfo.Type}</span>
                </div>
                <div className="director">
                  <span className="heading">Genre&nbsp;&nbsp;&nbsp; </span>
                  <span className="detail">{movieInfo.Genre}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
