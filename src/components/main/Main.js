import React, { useState } from "react";
import Header from "../header/Header";
import ContactUs from "../contact-us/ContactUs.js";
import img1 from "../gallery/assets/image1.jpg";
import img2 from "../gallery/assets/image2.jpg";
import img3 from "../gallery/assets/image3.jpg";
import img4 from "../gallery/assets/image4.jpg";
import Gallery from "../gallery/Gallery.js";
import "./Main.css";
import CreditCard from "../credit-card/CreditCard.js";

export default function Main() {
  const [index, setIndex] = useState("");
  const [loading, setLoading] = useState(false);

  const dataImage = [
    {
      id: 0,
      img: img1,
    },
    {
      id: 1,
      img: img2,
    },
    {
      id: 2,
      img: img3,
    },
    {
      id: 3,
      img: img4,
    },
  ];

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col text-center pt-3">
            <h3>Latest news</h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              After countless planning and many efforts, one postponement and
              several bumps on the way - We set out more determined than ever to
              dance life and riot in the plaza without any interruption, from
              roundabout who knows how much it's coming!
            </p>
            <p>
              Join us for a 12-hour journey, of pure Israeli trance for head and
              legs. We do not want to fiddle too much, the lineup can speak for
              us so get it.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid text-center align-self-center">
        <div className="row row__inner">
          {dataImage.map((img, index) => (
            <div style={{ padding: "0", margin: "0" }} className="col tile">
              <img
                class="tile__img img-thumbnail"
                data-toggle="modal"
                data-target="#exampleModal"
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
          id="exampleModal"
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
                        setIndex(3);
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
                      if (index >= 3) {
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

      <ContactUs />
      <Gallery />
      <CreditCard />
    </>
  );
}
