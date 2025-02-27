import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../store";
import { createRandomMovie } from "../data/faker.jsx";

function MoviePlaylist() {
  const dispatch = useDispatch();

  const moviePlaylist = useSelector((state) => {
    return state.movies;
  });

  const handleMovieAdd = (movie) => {
    dispatch(addMovie(movie));
  };
  const handleMovieRemove = (movie) => {
    dispatch(removeMovie(movie));
  };

  const renderedMovies = moviePlaylist.map((movie) => (
    <li key={movie.id} className="flex justify-between items-center bg-gray-100 p-3 rounded-md shadow-md">
      <span className="text-gray-800 font-medium">{movie.title}</span>
      <button onClick={() => handleMovieRemove(movie)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition">
        ✕
      </button>
    </li>
  ));

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-700">🎬 Movie Playlist</h3>
        <button
          onClick={() => handleMovieAdd(createRandomMovie())}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
        >
          + Add Movie
        </button>
      </div>
      <ul className="space-y-3">{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;
