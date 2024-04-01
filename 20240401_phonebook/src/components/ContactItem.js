import React, { useMemo } from "react";
import { Row, Col } from "react-bootstrap";

const images = [
  "01.ico",
  "02.ico",
  "03.ico",
  "04.ico",
  "05.ico",
  "06.ico",
  "07.ico",
  "08.ico",
  "09.ico",
  "10.ico",
  "11.ico",
  "12.ico",
  "13.ico",
  "14.ico",
];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const ContactItem = ({ item }) => {
  const randomImage = useMemo(() => getRandomImage(), []);

  return (
    <div>
      <Row className="users">
        <Col className="userImg">
          <img src={`./img/${randomImage}`} alt="Random Image"></img>
        </Col>
        <Col className="userName">
          <div>{item.name}</div>
          <div>{item.phoneNumber}</div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactItem;
