import { Suspense, lazy, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { setLogin } from "../../actions";

const Login = lazy(() => import("../../components/Login"));
const Signup = lazy(() => import("../../components/Signup"));
const ForgotPassword = lazy(() => import("../../components/ForgotPassword"));

const navMenu = [
  {
    id: "rent",
    name: "Rent",
    path: "/",
    isVisible: true,
  },
  {
    id: "buy",
    name: "Buy",
    path: "/buyList",
    isVisible: true,
  },
  {
    id: "sell",
    name: "Sell",
    path: "/sellCar",
    isVisible: true,
  },
];

const TopNav = () => {
  const dispatch = useDispatch();
  const { isLogin, loginDetails } = useSelector(({ common }) => common);

  const [isActiveTab, setActiveTab] = useState("rent");

  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <strong>
              <em>
                <mark className="rounded">Dream Car</mark>
              </em>
            </strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              {navMenu.map(
                (menu, i) =>
                  menu.isVisible && (
                    <li key={i} className="nav-item">
                      <Link
                        to={menu.path}
                        className={`nav-link ${
                          isActiveTab === menu.id ? "active" : ""
                        }`}
                        onClick={() => setActiveTab(menu.id)}
                      >
                        {menu.name}
                      </Link>
                    </li>
                  )
              )}

              {!isLogin && (
                <li className="nav-item">
                  <button
                    type="button"
                    className="nav-link btn btn-link"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                  >
                    Login or Signup
                  </button>
                </li>
              )}

              {isLogin && (
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {loginDetails ? loginDetails.email : "Hello"}
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <button
                        type="button"
                        className="btn btn-link"
                        onClick={() => dispatch(setLogin(false))}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <Suspense fallback="loading...">
        <Login />
      </Suspense>
      <Suspense fallback="loading...">
        <Signup />
      </Suspense>
      <Suspense fallback="loading...">
        <ForgotPassword />
      </Suspense>
    </>
  );
};

export default TopNav;
