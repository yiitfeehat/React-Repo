import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import data from "./data";
import "./scss/app.scss";

function App() {
  console.log(data);
  return (
    <>
      <Header />
      {data.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          img={item.img}
          job={item.job}
          comment={item.comment}
        />
      ))}
      <Footer />
    </>
  );
}

export default App;
