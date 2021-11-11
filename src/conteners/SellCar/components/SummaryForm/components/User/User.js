import { useSelector } from "react-redux";

const User = () => {
  const { userData } = useSelector(({ sellCar }) => sellCar);

  const { firstName, lastName, email, phoneNumber, address, city, state, zip } =
    userData;

  return (
    <>
      <p className="row">
        <div className="col-6">
          Name :{" "}
          <strong>
            {firstName} {lastName}
          </strong>
        </div>
        <div className="col-6">
          Phone Number : <strong>{phoneNumber}</strong>
        </div>
      </p>
      <p>
        Email : <strong>{email}</strong>
      </p>

      <p>
        Address : <strong>{address}</strong>
      </p>

      <p className="row">
        <div className="col-6">
          State : <strong>{state}</strong>
        </div>
        <div className="col-6">
          City : <strong>{city}</strong>
        </div>
      </p>
      <p className="row">
        <div className="col-6">
          Pin <strong>{zip}</strong>
        </div>
      </p>
    </>
  );
};

export default User;
