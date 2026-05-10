function Login() {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">

      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-[350px]">

        <h2 className="text-white text-3xl font-bold mb-6 text-center">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-gray-700 text-white outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded bg-gray-700 text-white outline-none"
        />

        <button className="w-full bg-red-500 hover:bg-red-600 p-3 rounded text-white font-semibold">
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;