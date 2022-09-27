import React from "react";
import { directors } from "../data";

function Directors() {
  const director = directors.map((d) => {
    return (
      <div key={d.name}>
        <h1>Name: {d.name}</h1>
        <h3>Movies:</h3>
        <ul>
          {d.movies.map((movie, id) => <li key={id}>{movie}</li>)}
        </ul>
      </div>
    )
  })
  return <div>
    <h1>Directors Page</h1>
    {director}
  </div>;
}

export default Directors;
