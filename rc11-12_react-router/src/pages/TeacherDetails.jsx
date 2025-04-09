import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import NotFound from "./NotFound";
import spinner from "../img/Loading_icon.gif"

const TeacherDetails = () => {
  //! 1. YOL KISA
  // const {
  //   state: { kisi },
  // } = useLocation();
  // const { name, username, phone, website, email } = kisi;

  //! 2. YOL UZUN

  const { id } = useParams();
  const [kisi, setKisi] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((veri) => setKisi(veri))
      .catch((err) => setError(true)).finally(()=>setLoading(false));
  }, [id]);

  if (error === true) {
    return <NotFound />;
  } else if (loading) {
    return ( 
      <div>
        <img src={spinner} alt="" />
      </div>
    )
  }

  return (
    <div className="container text-center mt-4">
      <div>
        <img
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${kisi.id}`}
          alt=""
          width="300px"
        />
        <h3>{kisi.username} </h3>
        <h6>{kisi.name} </h6>
        <h6>{kisi.phone} </h6>
        <h6>{kisi.website} </h6>
        <h6>{kisi.email} </h6>
      </div>
      <div>
        <button className="btn btn-warning">GO BACK</button>
        <button className="btn btn-primary">GO HOME</button>
      </div>
    </div>
  );
};

export default TeacherDetails;
