import React from "react";
import { movies } from "../data";

function Movies() {

  const movie = movies.map((m) => {
    return (
      <div key={m.title}>
        <h1>Name: {m.title}</h1>
        <p>Time: {m.time}</p>
        <h3>Genre:</h3>
        <ul>
          {m.genres.map((genre, id) => <li key={id}>{genre}</li>)}
        </ul>
      </div>
    )
  })
  return <div>
    <h1>Movies Page</h1>
    {movie}
  </div>;
}

export default Movies;
