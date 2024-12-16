import React from "react";
import "./FlightTicket.scss";

interface TicketProps {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
  currency: "RUB" | "USD" | "EUR";
  convertPrice: (price: number, currency: "RUB" | "USD" | "EUR") => number;
}

const FlightTicket: React.FC<TicketProps> = ({
  origin,
  origin_name,
  destination,
  destination_name,
  departure_date,
  departure_time,
  arrival_date,
  arrival_time,
  carrier,
  stops,
  price,
  currency,
  convertPrice,
}) => {

  const pasteCurrencySymbol = () => {
    switch (currency) {
      case "RUB":
        return "₽";
      case "USD":
        return "$";
      case "EUR":
        return "€";
        default:
          return "";
    }
  };

  const pasteCompanyLogoPath = () => {
    switch (carrier) {
      case "SU":
        return "./../../src/assets/aeroflot-logo.png";
      case "TK":
        return "./../../src/assets/turkish-airlines-logo.png";
      case "S7":
        return "./../../src/assets/s7-airlines-logo.png";
        case "BA":
        return "./../../src/assets/british-airways-logo.png";
        default:
          return "";
    }
  }
  return (
    <div className="ticket">
      <div className="ticket-left">
        <img
          className="company-logo"
          src={pasteCompanyLogoPath()}
          alt="логотип авиалиний"
        ></img>
        <button className="buy-btn">
          Купить<br></br> за {convertPrice(price, currency)}
          {pasteCurrencySymbol()}
        </button>
      </div>
      <div className="ticket-right">
        <div className="ticket-grid-start-upper">
          <p className="ticket-time">{departure_time}</p>
        </div>
        <div className="ticket-grid-start-lower">
          <p className="ticket-place">
            {origin}, {origin_name}
          </p>
          <p className="ticket-date">{departure_date}</p>
        </div>
        <div className="ticket-center ticket-grid-centre">
          <p className="ticket-stops">
            {stops > 0
              ? `${stops} ${stops === 1 ? "пересадка" : "пересадки"}`
              : null}
          </p>
          <div className="plane-flex">
            <div className="plane-line"></div>
            <img
              className="plane-svg "
              src="./../../src/assets/plane_svg.svg"
              alt=""
            ></img>
          </div>
        </div>
        <div className="ticket-grid-end-upper">
          <p className="ticket-time">{arrival_time}</p>
        </div>
        <div className="ticket-grid-end-lower">
          <p className="ticket-place">
            {destination_name}, {destination}
          </p>
          <p className="ticket-date">{arrival_date}</p>
        </div>
      </div>
    </div>
  );
};

export default FlightTicket;
