import React from "react";
import Header from "../header/Header";
import ContactUs from "../contact-us/ContactUs.js";
import Gallery from "../gallery/Gallery.js";
import CreditCard from "../credit-card/CreditCard.js";

export default function Main() {
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
        <div className="row ">
          <div className="col">
            <img
              class="img-thumbnail"
              src="https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.6435-9/202356951_4032472883538749_1733532661209181007_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=e3f864&_nc_ohc=zQvAa4qQ0Y0AX9fBBj1&_nc_ht=scontent.ftlv6-1.fna&oh=780075f1134a0c72eb8c4c585f28f6b5&oe=60D6802D"
              alt="Card image"
              style={{ width: "25%", height: "90%" }}
            />
            <img
              class="img-thumbnail"
              src="https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.6435-9/164797237_3781988691920504_4931987305617237549_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=gpCFouR6xVUAX-86yp0&_nc_ht=scontent.ftlv6-1.fna&oh=ddca023f1152d89d97724ad31343dfbf&oe=60D5B188"
              alt="Card image"
              style={{ width: "25%", height: "90%" }}
            />
            <img
              class="img-thumbnail"
              src="https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.6435-9/162777694_3767051963414177_2756265185930628962_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=730e14&_nc_ohc=b3NlRW_qU1wAX-u4lxw&_nc_ht=scontent.ftlv6-1.fna&oh=aab54a19fb62bd18dfe261ea39a0ec5f&oe=60D55DDF"
              alt="Card image"
              style={{ width: "25%", height: "90%" }}
            />
            <img
              class="img-thumbnail"
              src="https://scontent.ftlv6-1.fna.fbcdn.net/v/t1.6435-9/79432837_2582727015180017_8496107445121187840_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=9MSKD9CmRkQAX9srMqm&_nc_ht=scontent.ftlv6-1.fna&oh=9ca17e890dcef089314910425e163e4c&oe=60D48E35"
              alt="Card image"
              style={{ width: "25%", height: "90%" }}
            />
          </div>
        </div>
      </div>
      <ContactUs />
      <Gallery />
      <CreditCard />
    </>
  );
}
