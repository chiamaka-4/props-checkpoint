import { players } from "../players";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import React from "react";
import "./Player.css";

const PlayerList = () => {
  return (
    <div className="football">
      {players.map((eachPlayer) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={eachPlayer.imageClass} />
            <Card.Body>
              <Card.Title>Get To Know Me More </Card.Title>
              <Card.Text>{eachPlayer.name}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>{eachPlayer.jerseyNumber}</ListGroup.Item>
              <ListGroup.Item>{eachPlayer.age}</ListGroup.Item>
              <ListGroup.Item></ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default PlayerList;
