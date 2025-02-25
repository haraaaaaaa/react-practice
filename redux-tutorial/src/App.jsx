import React from "react";
import MoviePlaylist from "./components/MovieList";
import SongPlaylist from "./components/SongList";

const App = () => {
  const handleResetClick = () => {
    // Reset logic (you can implement it here)
  };
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <button
        onClick={handleResetClick}
        className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition font-medium"
      >
        Reset Both Playlists
      </button>
      <hr className="my-6 border-gray-300" />
      <MoviePlaylist />
      <hr className="my-6 border-gray-300" />
      <SongPlaylist />
    </div>
  );
};

export default App;
