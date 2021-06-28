import React from "react";
import img9 from "./assets/gallery-img/image9.jpg";
import img8 from "./assets/gallery-img/image8.jpg";
import img7 from "./assets/gallery-img/image7.jpg";
import img6 from "./assets/gallery-img/image6.jpg";
import img5 from "./assets/gallery-img/image5.jpg";
import img10 from "./assets/gallery-img/image10.jpg";
import img11 from "./assets/gallery-img/image11.jpg";
import img12 from "./assets/gallery-img/image12.jpg";
import "./Gallery.css";

export default function Gallery() {
  return (
    <>
      <div class="container text-center pb-4">
        <div class="row row__inner">
          <div class="col tile">
            <img
              class=" tile__img"
              src={img9}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div class=" col tile">
            <img
              class=" tile__img"
              src={img10}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div class=" col tile">
            <img
              class=" tile__img"
              src={img11}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div class=" col tile">
            <img
              class=" tile__img"
              src={img12}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
      <div class="container text-center pb-4">
        <div class="row row__inner">
          <div class="col tile">
            <img
              class=" tile__img"
              src={img5}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div class=" col tile">
            <img
              class=" tile__img"
              src={img6}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div class=" col tile">
            <img
              class=" tile__img"
              src={img7}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div class=" col tile">
            <img
              class=" tile__img"
              src={img8}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <a
              class="btn"
              href="http://www.facebook.com/MagelomaniA/photos/?ref=page_internal"
            >
              <span>Gallery</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
