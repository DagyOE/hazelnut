import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/authActions.jsx";

const Navigation = () => {
  const userId = useSelector((state) => state.auth.userId);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Hazelnut
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/home"}
                >
                  Domov
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"to-do-s"}>
                  Úlohy
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <button
                className="btn btn-outline-danger"
                type="button"
                onClick={handleLogout}
              >
                Odhlásiť sa
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
