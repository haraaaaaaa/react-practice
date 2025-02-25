import { useState } from "react";

function SongPlaylist() {
  const [songPlaylist, setSongPlaylist] = useState([]);

  const renderedSongs = songPlaylist.map((song) => (
    <li
      key={song}
      className="flex justify-between items-center bg-gray-100 p-3 rounded-md shadow-md"
    >
      <span className="text-gray-800 font-medium">{song}</span>
      <button
        onClick={() => handleSongRemove(song)}
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition"
      >
        ✕
      </button>
    </li>
  ));

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-700">
          🎵 Song Playlist
        </h3>
        <button
          onClick={() => handleSongAdd(createRandomSong())}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
        >
          + Add Song
        </button>
      </div>
      <ul className="space-y-3">{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
