import React from "react";
import img9 from "./assets/gallery-img/image9.jpg";
import img8 from "./assets/gallery-img/image8.jpg";
import img7 from "./assets/gallery-img/image7.jpg";
import img6 from "./assets/gallery-img/image6.jpg";
import img5 from "./assets/gallery-img/image5.jpg";
import img12 from "./assets/gallery-img/image12.jpg";
import img11 from "./assets/gallery-img/image11.jpg";
import img10 from "./assets/gallery-img/image10.jpg";
import { FcGallery } from "react-icons/fc";
import "./Gallery.css";

export default function Gallery() {
  const dataImage = [
    {
      id: 0,
      img: img9,
    },
    {
      id: 1,
      img: img8,
    },
    {
      id: 2,
      img: img7,
    },
    {
      id: 3,
      img: img6,
    },
    {
      id: 4,
      img: img5,
    },

    {
      id: 5,
      img: img12,
    },
    {
      id: 6,
      img: img11,
    },
    {
      id: 7,
      img: img10,
    },
  ];

  return (
    <>
      <div class="container text-center pb-2">
        <div className="row row__inner">
          {dataImage.map((img, index) => (
            <div style={{ padding: "0", margin: "0" }} className="col-3 tile">
              <img class="img-thumbnail  tile__img" src={img.img} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <a
              class="btn"
              href="http://www.facebook.com/MagelomaniA/photos/?ref=page_internal"
            >
              <button type="button" class="btn btn-info btn-sm">
                {" "}
                Gallery <FcGallery />
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
