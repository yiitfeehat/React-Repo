import React, { useState } from "react";
import uuid from "react-uuid"
const AddPatient = ({hastalar, setHastalar,doctors}) => {
  const [isim, setIsim] = useState("");
  const [tarih, setTarih] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setHastalar([
      ...hastalar,
      {
        id: uuid(),
        patientName: isim,
        day: tarih,
        isDone: false,
        myDoctor: doctors[0].doctorName,
        department: "Pediatric Dentistry",
      },
    ]);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name"> Patient Information 👨🏻‍⚕️</label>
          <input
            id="name"
            type="text"
            placeholder="Your Name..."
            onChange={(e) => setIsim(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor=""> Day & Time 📅</label>
          <input
            type="datetime-local"
            onChange={(e) => setTarih(e.target.value)}
          />
        </div>

        <div>
          <button className="kayitBtn" type="submit">
            <span>{doctors[0].doctorName} </span> için kayıt oluştur
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPatient;
