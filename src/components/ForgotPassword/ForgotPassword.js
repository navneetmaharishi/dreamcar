import { useState } from "react";

const ForgotPassword = () => {
  const [user, setUser] = useState({
    email: "",
  });

  const [isRset, setReset] = useState(false);

  const onInput = (e) => {
    let target = e.target,
      id = target.id,
      value = target.value;
    setUser({ ...user, [id]: value });
  };

  const onRestPassword = () => setReset(true);
  return (
    <>
      <div
        className="modal fade"
        id="forgotPasswordModal"
        tabIndex="-1"
        aria-labelledby="forgotPasswordModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Forgot Password
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {isRset ? (
                <p>Please check your Email address</p>
              ) : (
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
              )}

              <div className="mb-3 text-center">
                {isRset ? (
                  <button
                    type="button"
                    className="btn btn-primary w-100"
                    data-bs-dismiss="modal"
                  >
                    Okay
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-primary w-100"
                    onClick={onRestPassword}
                  >
                    Send reset password link
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
