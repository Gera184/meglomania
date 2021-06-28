import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col pt-3 text-center">
            <h1 className="header">MEGALOMANIA</h1>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <h1>EVENTS</h1>
          </div>
        </div>
      </div>

      <div className="carusela">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://passportexperience.com/wp-content/uploads/2020/01/310_Day-Zero_Haydon-Perrior_Low-Res.jpg"
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
