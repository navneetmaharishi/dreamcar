import { useState } from "react";
import { useDispatch } from "react-redux";
import { setLogin, setLoginDetails } from "../../actions";

const Signup = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const onInput = (e) => {
    let target = e.target,
      id = target.id,
      value = target.value;
    setUser({ ...user, [id]: value });
  };

  const onSignup = () => {
    dispatch(setLoginDetails(user));
    dispatch(setLogin(true));
  };

  return (
    <>
      <div
        className="modal fade"
        id="signupModal"
        tabIndex="-1"
        aria-labelledby="signupModal"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Sign Up
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="px-4">
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    value={user.firstName}
                    onChange={onInput}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    value={user.lastName}
                    onChange={onInput}
                  />
                </div>
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
                  />
                </div>

                <div className="mb-3 mt-4 text-center">
                  <button
                    type="button"
                    className="btn btn-primary w-100"
                    data-bs-dismiss="modal"
                    onClick={onSignup}
                  >
                    Sing Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
