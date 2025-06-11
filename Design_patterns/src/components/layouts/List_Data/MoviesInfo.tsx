interface MoviesInfoProps {
  movieTitle: string;
  moviePrice: number;
  movieDescription: string;
  movieRating: number;
}

import React from "react";

const MoviesInfo = ({
  movieTitle,
  moviePrice,
  movieDescription,
  movieRating,
}: MoviesInfoProps) => {
  return (
    <div style={{ padding: "1rem", backgroundColor: "lightblue" }}>
      <h2>{movieTitle}</h2>
      <p>Price: {moviePrice}</p>
      <p>Description: {movieDescription}</p>
      <p>Rating: {movieRating}/10</p>
    </div>
  );
};

export default MoviesInfo;
