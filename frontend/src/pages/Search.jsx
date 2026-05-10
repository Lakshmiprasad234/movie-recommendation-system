import { useState } from "react";
import MovieCard from "../components/MovieCard";
import { fetchRecommendations } from "../services/movieService";

function Search() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    try {

      const data = await fetchRecommendations(query);

      const formattedMovies = data.map((title, index) => ({
        id: index,
        title: title,
      }));

      setMovies(formattedMovies);

    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-6">

      {/* Search Bar */}
      <div className="flex justify-center mb-10">

        <input
          type="text"
          placeholder="Enter movie name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-[400px] p-3 rounded-l bg-gray-700 outline-none"
        />

        <button
          onClick={handleSearch}
          className="bg-red-500 px-6 rounded-r hover:bg-red-600"
        >
          Recommend
        </button>

      </div>

      {/* Recommendations */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p className="text-center col-span-4 text-gray-400">
            Search for a movie to get recommendations
          </p>
        )}

      </div>

    </div>
  );
}

export default Search;