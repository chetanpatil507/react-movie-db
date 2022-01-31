import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import Cards from "./Cards";
import "./Homepage.css";
const Homepage = () => {
  const API_KEY = "e4d6b0f2";

  const [post, setPost] = useState([]);

  const userFunc = (val) => {
    fetchData(val);
  };

  const fetchData = async (val) => {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?s=${val}&apikey=${API_KEY}`
    );
    setPost(data?.Search);
  };  
  return (
    <div>
      <Header userFunc={userFunc} />
      <div className="card__container col-lg-12">
        {post?.length ? (
          post.map((p, index) => (
            <Cards
              key={index}
              title={p.Title}
              year={p.Year}
              poster={p.Poster}
              type={p.Type}
              imdbID={p.imdbID}
            />
          ))
        ) : (
          <h2 className="search__h2">Search for a Movie</h2>
        )}
      </div>
    </div>
  );
};

export default Homepage;
