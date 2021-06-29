import React from "react";
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
            <div className="col-3 tile">
              <img class="img-thumbnail tile__img" src={img.img} alt="" />
            </div>
          ))}
        </div>
      </div>
      <ContactUs />
      <Gallery />
      <CreditCard />
    </>
  );
}
