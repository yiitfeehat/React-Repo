import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { data } from "../../helpers/data";
import { useState } from "react";
import LegendCard from "./LegendCard";


const LegendContainer = () => {

  // const [Show, setShow] = useState(false)
  // console.log(Show)

  const [Search, setSearch] = useState("")
  const handleChange=(e)=> {
    setSearch(e.target.value) //! Setter metodu her zaman asenkron çalışır.
  }

  const filteredData = data.filter((item)=>item.name.toLowerCase().includes(Search.trim().toLowerCase()))

  return (
    <div>
      <Form.Control
        onChange={handleChange}
        className="w-50 mx-auto my-2"
        type="text"
        placeholder="Search Legends..."
      />

      <Container className="p-3 my-3 card-container">
        <Row xs={1} md={2} xl={3} className="justify-content-center g-3">
          {filteredData.map((legend) => (
            <LegendCard legend={legend}/>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LegendContainer;
