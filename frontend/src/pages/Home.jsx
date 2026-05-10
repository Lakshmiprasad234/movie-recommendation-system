function Home() {
  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-6">
        Discover Your Next Favorite Movie
      </h1>

      <p className="text-xl text-gray-300 mb-8">
        AI Powered Movie Recommendation Platform
      </p>

      <button className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg text-lg">
        Explore Movies
      </button>
    </div>
  );
}

export default Home;