import { Col, Card } from "react-bootstrap";
import { useState } from "react";

import React from "react";

const LegendCard = ({ legend }) => {
  const [Show, setShow] = useState(false);
  return (
    <Col key={legend.id}>
      <Card
        className="player-card"
        role="button"
        onClick={() => {
          setShow(!Show);
        }}
      >
        {" "}
        {!Show ? (
          <Card.Img variant="top" src={legend.img} />
        ) : (
          <>
            <Card.Header>
              <Card.Title>{legend.name}</Card.Title>
            </Card.Header>

            <ul className="mx-auto">
              {legend.statistics.map((item, index) => (
                <li key={index} className="list-unstyled h4">
                  ⚽{item}
                </li>
              ))}
            </ul>
            <span>Career Years: {legend.official_career}</span>
          </>
        )}
      </Card>
    </Col>
  );
};

export default LegendCard;
