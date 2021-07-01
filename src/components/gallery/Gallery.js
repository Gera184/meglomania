import React, { useState } from "react";
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
  const [index, setIndex] = useState("");
  const [loading, setLoading] = useState(false);

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
              <img
                class="tile__img img-thumbnail"
                data-toggle="modal"
                data-target="#gallerymode"
                onClick={() => {
                  setIndex(index);
                  setLoading(true);
                }}
                src={img.img}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>

      {loading ? (
        <div
          class="modal fade"
          id="gallerymode"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div
                  id="carouselExampleControls"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        class="img-thumbnail"
                        src={dataImage[index].img ? dataImage[index].img : ""}
                        alt=""
                      />
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                    onClick={() => {
                      if (index <= 0) {
                        setIndex(7);
                      } else {
                        setIndex(index - 1);
                      }
                    }}
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                    onClick={() => {
                      if (index >= 7) {
                        setIndex(0);
                      } else {
                        setIndex(index + 1);
                      }
                    }}
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

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
