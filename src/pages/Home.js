import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mt-5 text-center">

      <h2>Auth System</h2>

      <Link to="/login" className="btn btn-primary m-2">
        Login
      </Link>

      <Link to="/register" className="btn btn-success m-2">
        Register
      </Link>

    </div>
  );
}

export default Home;