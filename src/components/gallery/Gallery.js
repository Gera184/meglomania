import React from "react";
import "./Gallery.css";

export default function Gallery() {
  return (
    <>
      <div class="container text-center pb-5">
        <div class="row row__inner">
          <div class="col tile">
            <img
              class=" tile__img"
              src="http://scontent.ftlv6-1.fna.fbcdn.net/v/t31.18172-8/22713148_1423610744424989_4192595690563689466_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=fi1uDbljjJMAX9ji5C-&_nc_ht=scontent.ftlv6-1.fna&oh=f6ad55459853114379d37b510742b2ce&oe=60D7C343"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div class=" col tile">
            <img
              class=" tile__img"
              src="http://scontent.ftlv6-1.fna.fbcdn.net/v/t1.6435-9/38246172_1734899703296090_663962533341691904_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=174925&_nc_ohc=oG2jmy5uBQoAX8YPxqa&_nc_ht=scontent.ftlv6-1.fna&oh=872cdf37efee250b60e925d5cdd4d450&oe=60D88EAD"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div class=" col tile">
            <img
              class=" tile__img"
              src="http://scontent.ftlv6-1.fna.fbcdn.net/v/t31.18172-8/22792355_1423609751091755_2618885245021074014_o.jpg?_nc_cat=109&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=1yTcg54l-cUAX-nt-Ba&_nc_ht=scontent.ftlv6-1.fna&oh=b3332ffb450ec233fc6d06b9b994b4be&oe=60D84868"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div class=" col tile">
            <img
              class=" tile__img"
              src="http://scontent.ftlv6-1.fna.fbcdn.net/v/t1.6435-9/40582656_1789490517837008_1864760497958551552_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=e3f864&_nc_ohc=dmdr7sMA940AX-KYCya&_nc_ht=scontent.ftlv6-1.fna&oh=a9db396e4240575d13a1dcae0b8640de&oe=60D79FAA"
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
              src="http://scontent.ftlv6-1.fna.fbcdn.net/v/t31.18172-8/22829272_1423611924424871_4911256436017490709_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=IUSOZ4Q7J3YAX8Bwj-s&_nc_ht=scontent.ftlv6-1.fna&oh=6b935b310a75eb83f9dc7dd22ab37443&oe=60D9038C"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div class=" col tile">
            <img
              class=" tile__img"
              src="http://scontent.ftlv6-1.fna.fbcdn.net/v/t31.18172-8/22770639_1423611264424937_5268102474726281681_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=zatZTUdmdosAX_H83J8&_nc_ht=scontent.ftlv6-1.fna&oh=c34cbbb661f03f66f1a5dc9f4b785c5d&oe=60D824D9"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div class=" col tile">
            <img
              class=" tile__img"
              src="http://scontent.ftlv6-1.fna.fbcdn.net/v/t31.18172-8/22770648_1423611014424962_4489098438399641960_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=YIYUebcu6aIAX-PrEXf&tn=un_y2_uGxRGyGAh_&_nc_ht=scontent.ftlv6-1.fna&oh=e4f0531312b477c7dd3a0288a3612a93&oe=60D7A8AE"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div class=" col tile">
            <img
              class=" tile__img"
              src="http://scontent.ftlv6-1.fna.fbcdn.net/v/t31.18172-8/22829396_1423610647758332_100457444762598249_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=cdbe9c&_nc_ohc=Y75RP2VhfBoAX_dvckx&_nc_ht=scontent.ftlv6-1.fna&oh=55ddb170ef57e334193fc4503bdb7c78&oe=60D79833"
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
