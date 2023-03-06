import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../../component/Loader";
import actRenderFilm from "./duck/action";
import RenderFilm from "./renderFilm";
import actDeleteFilmApi from "./renderFilm/DeleteFilm/duck/action";
import SearchFilm from "./SearchFilm";

export default function Film() {
  console.log("213213wq");
  const loading = useSelector((state) => state.dataFilmRenderReducer.loading);
  const data = useSelector((state) => state.dataFilmRenderReducer.data);
  const [searchFilm, setSearchFilm] = useState("");

  const [deletetFilm, setDeletetFilm] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actRenderFilm());
  }, [deletetFilm]);

  console.log(data);

  if (loading) return <Loader />;
  const renderFilm = () => {
    const filmFilter = data?.filter((film) => {
      console.log(film.tenPhim);
      return film?.tenPhim.toLowerCase().indexOf(searchFilm) !== -1;
    });

    return filmFilter?.map((film) => {
      return (
        <RenderFilm
          key={film.maPhim}
          film={film}
          handleOnlickDeleteFilm={handleOnlickDeleteFilm}
        />
      );
    });
  };

  const handleOnlickDeleteFilm = (id) => {
    console.log(id);
    setDeletetFilm(id);
    dispatch(actDeleteFilmApi(id));
  };

  const handleSearchFilmOnChange = (e) => {
    const wordLowercase = e.target.value.toLowerCase();
    setSearchFilm(wordLowercase);
  };

  return (
    <div className="container">
      <SearchFilm handleSearchFilmOnChange={handleSearchFilmOnChange} />
      <table className="table">
        <thead>
          <tr>
            <th>Mã Phim</th>
            <th>Hình Ảnh</th>
            <th>Tên Phim</th>
            <th>Mô Tả</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>{renderFilm()}</tbody>
      </table>
    </div>
  );
}
