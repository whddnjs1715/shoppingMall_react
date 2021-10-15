import React from "react";
import { Button, Jumbotron } from "react-bootstrap";

const Jumbotro = () => {
  return (
    <Jumbotron className="background">
      <h1>20% Season Off</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  );
};

export default Jumbotro;
