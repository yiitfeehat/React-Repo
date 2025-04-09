import React from "react";
import { FaTimesCircle } from "react-icons/fa";
const PatientList = ({ hastalar, setHastalar, magic }) => {
  return (
    <div>
      {hastalar.map((patient) => (
        <div>
          <div
            className={patient.isDone === true ? "trueStil" : magic === false ? "falseStyle2" : "falseStyle"}
            onDoubleClick={() =>
              setHastalar(
                hastalar.map((hasta) =>
                  hasta.id === patient.id
                    ? { ...patient, isDone: !hasta.isDone }
                    : hasta
                )
              )
            }
          >
            <div className="randevuInfo">
              <h2>♦ {patient.patientName} ♦ </h2>
              <h4>🕒{patient.day} </h4>
              <h3>👩🏻‍⚕️{patient.myDoctor} </h3>
              <h2 className="department">💊 {patient.department} </h2>
            </div>

            <FaTimesCircle
              style={{ color: "red", fontSize: "1.7rem" }}
              onClick={() =>
                setHastalar(hastalar.filter((b) => b.id !== patient.id))
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PatientList;
