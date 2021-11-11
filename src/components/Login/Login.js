import { useState } from "react";
import { useDispatch } from "react-redux";
import { setLogin, setLoginDetails } from "../../actions";

const Login = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onInput = (e) => {
    let target = e.target,
      id = target.id,
      value = target.value;
    setUser({ ...user, [id]: value });
  };

  const onLogin = () => {
    dispatch(setLoginDetails(user));
    dispatch(setLogin(true));
  };

  return (
    <>
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Login
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="px-2">
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={user.email}
                    onChange={onInput}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={user.password}
                    onChange={onInput}
                    required
                  />
                </div>

                <div className="mb-3">
                  <button
                    type="button"
                    className="btn btn-primary w-100"
                    data-bs-dismiss="modal"
                    onClick={onLogin}
                  >
                    Login
                  </button>
                </div>

                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-link w-100"
                    data-bs-target="#forgotPasswordModal"
                    data-bs-dismiss="modal"
                    data-bs-toggle="modal"
                  >
                    Forgot Password ?
                  </button>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary w-100"
                  data-bs-target="#signupModal"
                  data-bs-toggle="modal"
                  data-bs-dismiss="modal"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
