import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Cards.css";

const Cards = ({ title, year, poster, type, imdbID }) => {
  return (
    <div className="main__card">
      <div className="card" style={{ width: "18rem", height: "38rem" }}>
        <img
          src={`${poster === "N/A" ? "alt__poster.jpg" : poster}`}
          className="card-img-top alt__img"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            Year of Release: {year}
            <br />
            Type: {type}
          </p>
          <Link to={`/info/${imdbID}`} className="btn btn-primary ">
            More Info...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
