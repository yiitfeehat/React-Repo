import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  // const getTutorials = () => {
  //   const URL = "https://tutorial-api.fullstack.clarusway.com/tutorials";

  //   //Default olarak get olduğundan get yazmasakta olur
  //   axios
  //     .get(URL)
  //     .then((res) => console.log(res.data))
  //     .catch((error) => console.log(error));
  // };

  const [tutorials, setTutorials] = useState([]);

  const getTutorials = async () => {
    // const URL = "https://tutorial-api.fullstack.clarusway.com/tutorials";
    try {
      const {data} = await axios.get(process.env.REACT_APP_URL);
      setTutorials(data)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTutorials();
  }, []);

  return (
    <>
      <AddTutorial getTutorials={getTutorials} />
      <TutorialList tutorials={tutorials} getTutorials={getTutorials} />
    </>
  );
};

export default Home;
