import { Link } from "react-router-dom";

const BookingCNF = () => {
  return (
    <div className="app-warpper">
      <div className="page-center">
        <img className="rent-icon" src="icons/check.png" alt="check"/>
        <div className="my-2"></div>
        <h1>Thanks for using Dream Car</h1>
        <div className="my-1"></div>
        <h2>our team will connet soon!</h2>
        <div className="my-1"></div>
        <h3></h3>
        <h4>Team Dream cars</h4>
        <div className="my-3"></div>
        <Link to="/" className="btn btn-primary btn-lg">
          Go to home page
        </Link>
      </div>
    </div>
  );
};

export default BookingCNF;
