import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authActions.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigate));
  };

  return (
    <>
      <div className="container h-100">
        <div className="row h-100 d-flex justify-content-center align-items-center">
          <div className="col-md-4">
            <div className="card px-2 py-2">
              <div className="card-body">
                <div className="card-title">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="inputEmail" className="form-label">
                        Emailová adresa:
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="inputPassword" className="form-label">
                        Heslo:
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                      />
                    </div>
                    <button type={"submit"} className="btn btn-primary w-100">
                      Prihlásiť sa
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
