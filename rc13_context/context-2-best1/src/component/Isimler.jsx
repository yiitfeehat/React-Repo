import { useContext } from "react";
import AnaUser from "./AnaUser";
import { KullaniciContext } from "../context/KullaniciProvider";

const Isimler = () => {
  const { users } = useContext(KullaniciContext);



  return (
    <div>

      {users.slice(0,4).map((a)=>(
        <div key={a.login}>
          {a.login}
        </div>
      ))}

      <AnaUser />
    </div>
  );
};

export default Isimler;
