import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./CreditCard.css";

export default function CreditCard() {
  const [query, setQuery] = useState("");
  const [loading, setLodaing] = useState(false);
  const [creditCard, setCreditCard] = useState([]);

  useEffect(() => {
    axios
      .request(`https://lookup.binlist.net/${query}`)
      .then(function (response) {
        setCreditCard(response.data);
        setLodaing(true);
      })
      .catch(function (error) {
        console.error(error);
      });
    setCreditCard("");
  }, [query]);
  console.log(creditCard);

  return (
    <>
      <div className="container pt-5 pb-5">
        <div className="row">
          <div
            className="col-md-5 card1"
            style={{ backgroundColor: "#263238", color: "whitesmoke" }}
          >
            <div className="row pt-3">
              <div className="col text-center">
                <input
                  className="card-number-input  text-center"
                  type="number"
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="row pt-1">
              <div className="col text-muted text-center">
                <small>Enter the first digits of a card number (BIN/IIN)</small>
              </div>
            </div>
            <div className="row pt-2 text-center">
              <div className="col text-muted">
                <small>SCHEME / NETWORK</small>
              </div>
              <div className="col text-muted">
                <small>TYPE</small>
              </div>
            </div>
            <div className="row text-center">
              <div className="col">
                <label>{creditCard.scheme ? creditCard.scheme : "?"}</label>
              </div>
              <div className="col">
                <label>{creditCard.type ? creditCard.type : "?"}</label>
              </div>
            </div>
            <div className="row pt-2 text-center">
              <div className="col text-muted">
                <small>BRAND</small>
              </div>
              <div className="col text-muted">
                <small>PREPAID</small>
              </div>
            </div>
            <div className="row text-center">
              <div className="col">
                <label>{creditCard.brand ? creditCard.brand : "?"}</label>
              </div>
              <div className="col">
                {creditCard.prepaid ? <label>Yes</label> : <label>No</label>}
              </div>
            </div>
            <div className="row pt-2 text-center">
              <div className="col text-muted">
                <small>BANK</small>
              </div>
              <div className="col text-muted">
                <small>COUNTRY</small>
              </div>
            </div>
            <div className="row text-center">
              <div className="col">
                <label>{creditCard.bank ? creditCard.bank.name : "?"}</label>
                <label>{creditCard.bank ? creditCard.bank.city : null}</label>
                <label>{creditCard.bank ? creditCard.bank.phone : null}</label>
                <label>{creditCard.bank ? creditCard.bank.url : null}</label>
              </div>
              <div className="col">
                <label>{creditCard.bank ? creditCard.country.name : "?"}</label>
              </div>
            </div>
          </div>

          <div className="col-md-7 card2">
            <div className="row">
              <div className="col text-muted">
                <img
                  src="https://juicelifestyleshop.com/wp-content/uploads/2019/09/payment_icon_collection_222.png"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label>Name on Card</label>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  style={{ width: "100%", opacity: "80%", borderRadius: "5px" }}
                />
              </div>
            </div>
            <div className="row pt-3">
              <div className="col">
                <label>Card Number</label>
              </div>
              <div className="col">
                <label>CVV</label>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  placeholder="0000-0000-0000-0000"
                  style={{ width: "100%", opacity: "80%", borderRadius: "5px" }}
                />
              </div>
              <div className="col">
                <input
                  placeholder="***"
                  style={{ width: "100%", opacity: "80%", borderRadius: "5px" }}
                />
              </div>
            </div>
            <div className="row pt-3">
              <div className="col">
                <label>Expiration Date</label>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  placeholder="MM/YY"
                  style={{ width: "100%", opacity: "80%", borderRadius: "5px" }}
                />
              </div>
            </div>
            <div class="row pt-4">
              <div class="col">
                <button className="btn-info ">MAKE A PAYMENT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
