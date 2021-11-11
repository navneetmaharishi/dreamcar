import { useState } from "react";
import { UserForm, CarForm, SummaryForm } from "./components";

const SellCar = () => {
  const [showForm, setForm] = useState({
    isUserForm: true,
    isCarForm: false,
    isSummaryForm: false,
  });

  return (
    <div className="app-warpper">
      <div className="page-center">
        <div className="box">
          {showForm.isUserForm ? (
            <UserForm setForm={setForm} showForm={showForm} />
          ) : showForm.isCarForm ? (
            <CarForm setForm={setForm} showForm={showForm} />
          ) : (
            <SummaryForm setForm={setForm} showForm={showForm} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SellCar;
