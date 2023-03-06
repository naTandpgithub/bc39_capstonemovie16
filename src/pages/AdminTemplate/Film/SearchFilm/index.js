import React from "react";

export default function SearchFilm(props) {
  const { handleSearchFilmOnChange } = props;

  return (
    <>
      <input type="Search" onChange={handleSearchFilmOnChange} />
      <button>Search</button>
    </>
  );
}
