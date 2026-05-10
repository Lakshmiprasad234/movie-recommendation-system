function MovieCard({ movie }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg text-center hover:scale-105 transition cursor-pointer">

      {/* Poster Placeholder */}
      <div className="bg-gray-700 h-40 mb-4 rounded flex items-center justify-center">
        <span className="text-gray-400">Movie Poster</span>
      </div>

      {/* Movie Title */}
      <h3 className="text-lg font-semibold text-white">
        {movie.title}
      </h3>

    </div>
  );
}

export default MovieCard;