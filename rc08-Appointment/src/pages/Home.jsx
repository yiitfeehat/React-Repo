import React, { useState } from "react";

import PatientList from "../components/PatientList";
import AddPatient from "../components/AddPatient";

import { hastaData, doctorData } from "../helper/Data";

const Home = () => {
  let [doctors, setDoctors] = useState(doctorData);
  const [hastalar, setHastalar] = useState(hastaData);

  const [magic, setMagic] = useState(true);

  const doctorClick = (dId) => {

    doctors = doctors.filter((a) => a.id === dId)
    setDoctors(doctors);
    setMagic(false);

    setHastalar(hastalar.filter((a)=> a.myDoctor === doctors[0].doctorName))
  };

  return (
    <div style={{ display: magic ? "block" : "flex", textAlign: "center" }} className="randevularDiv">
      <div>
        <header>
          <h1>🦷 DENTAL HOSPITAL 🦷</h1>
          <h2>🩺 OUR DENTISTS 🩺</h2>
          <div className="dr">
            {doctors.map((dr) => (
              <div className={magic===false ? "imgTutanDiv" : ""}>
                <img
                  src={dr.doctorImg}
                  width="180px"
                  height="150px"
                  className="doctorBtn"
                  alt=""
                  onClick={() => doctorClick(dr.id)}
                />
                <h4 className="doctorName">{dr.doctorName}</h4>
              </div>
            ))}
          </div>
        </header>

        {!magic && <AddPatient hastalar={hastalar} setHastalar={setHastalar} doctors={doctors}/>}
      </div>

      <PatientList hastalar={hastalar} setHastalar={setHastalar} magic={magic}/>
    </div>
  );
};

export default Home;
