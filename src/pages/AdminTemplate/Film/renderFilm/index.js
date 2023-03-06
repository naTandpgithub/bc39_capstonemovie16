import React from "react";

export default function RenderFilm(props) {
  const { film, handleOnlickDeleteFilm } = props;

  return (
    <>
      <tr>
        <td>{film.maPhim}</td>
        <td>
          <img
            src={film.hinhAnh}
            alt={film.maPhim}
            style={{ width: "100px" }}
          />
        </td>
        <td>{film.tenPhim}</td>
        <td>{film.moTa}</td>
        <td>
          <button>Edit</button>
          <button
            className="btn btn-danger"
            onClick={() => handleOnlickDeleteFilm(film.maPhim)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
