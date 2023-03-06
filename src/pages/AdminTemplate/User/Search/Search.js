import React from "react";

export default function Search(props) {
  const { handleSearchOnchange } = props;
  // console.log(handleSearchOnchange);
  return (
    <>
      <input type="text" onChange={handleSearchOnchange} />
      <button>Search</button>
    </>
  );
}
