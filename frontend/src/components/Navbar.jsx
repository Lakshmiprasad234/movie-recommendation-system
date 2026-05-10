import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center shadow-lg">

      <h1 className="text-2xl font-bold text-red-500">
        MovieFlix
      </h1>

      <ul className="flex gap-6 text-lg">

        <li>
          <Link to="/" className="hover:text-red-500">
            Home
          </Link>
        </li>

        <li>
          <Link to="/search" className="hover:text-red-500">
            Search
          </Link>
        </li>

        <li>
          <Link to="/recommendations" className="hover:text-red-500">
            Recommendations
          </Link>
        </li>

        <li>
          <Link to="/login" className="hover:text-red-500">
            Login
          </Link>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;