import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userForm } from "../../../../actions";

const UserForm = (props) => {
  const { setForm, showForm } = props;
  const dispatch = useDispatch();
  const { userData } = useSelector(({ sellCar }) => sellCar);

  useEffect(() => {
    let isUSer =
      userData &&
      Object.keys(userData).length > 0 &&
      Object.getPrototypeOf(userData) === Object.prototype;

    if (isUSer) {
      setUser(userData);
    }
  }, []);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    idProof: "",
    photo: "",
  });

  const [isVarified, setVarified] = useState(false);

  const updateUserData = (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      city,
      state,
      zip,
      idProof,
      photo,
    } = user;

    let data = {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      city,
      state,
      zip,
      idProof,
      photo,
    };
    dispatch(userForm(data));
    setForm({ ...showForm, isUserForm: false, isCarForm: true });
  };

  const onInputChange = (e) => {
    let target = e.target,
      id = target.id,
      value = target.type === "checkbox" ? target.checked : target.value;
    if (target.type === "checkbox") {
      setVarified(value);
    } else {
      setUser({ ...user, [id]: value });
    }
  };

  return (
    <div className="container-fluid">
      <h2 className="text-center mb-5">User Details</h2>
      <form className="row g-3" onSubmit={updateUserData}>
        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={user.firstName}
            onChange={onInputChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={user.lastName}
            onChange={onInputChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={user.email}
            onChange={onInputChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="phoneNumber" className="form-label">
            Phone No
          </label>
          <input
            type="tel"
            className="form-control"
            id="phoneNumber"
            value={user.phoneNumber}
            onChange={onInputChange}
          />
        </div>
        <div className="col-12">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={user.address}
            onChange={onInputChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            value={user.city}
            onChange={onInputChange}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="state" className="form-label">
            State
          </label>
          <input
            type="text"
            className="form-control"
            id="state"
            value={user.state}
            onChange={onInputChange}
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="zip" className="form-label">
            Zip
          </label>
          <input
            type="text"
            className="form-control"
            id="zip"
            value={user.zip}
            onChange={onInputChange}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="idProof" className="form-label">
            ID Proof
          </label>
          <input
            type="file"
            className="form-control"
            id="idProof"
            // value={car.rc}
            onChange={onInputChange}
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="photo" className="form-label">
            Photo
          </label>
          <input
            type="file"
            className="form-control"
            id="photo"
            // value={car.rc}
            onChange={onInputChange}
          />
        </div>

        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="varifiedForm"
              checked={isVarified}
              onChange={onInputChange}
            />
            <label className="form-check-label" htmlFor="varifiedForm">
              I do hereby declare that all the information given above is true
              to the best of my knowledge and belief
            </label>
          </div>
        </div>
        <div className="col-12 text-end">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!isVarified}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
