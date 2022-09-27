import React from "react";
import { actors } from "../data";

function Actors() {

  const actor = actors.map((a) => {
    return (
      <div key={a.name}>
        <h1>Name: {a.name}</h1>
        <h3>Movies:</h3>
        <ul>
          {a.movies.map((movie, id) => <li key={id}>{movie}</li>)}
        </ul>
      </div>
    )
  });
  return <div>
    <h1>Actors Page</h1>
    {actor}
  </div>;
}

export default Actors;
