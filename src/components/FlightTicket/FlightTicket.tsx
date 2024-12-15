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
}) => {
  return (
    <div className="ticket">
      <div className="ticket-left">
        <img
          className="company-logo"
          src="./../../src/assets/company-logo.jpg"
          alt="логотип авиалиний"
        ></img>
        <button className="buy-btn">
          Купить<br></br> за {price}₽
        </button>
      </div>
      <div className="ticket-right">
        <div className="ticket-info">
          <p className="ticket-time">{departure_time}</p>
          <p className="ticket-place">
            {origin}, ({origin_name})
          </p>
          <p className="ticket-date">{departure_date}</p>
        </div>
        <div className="ticket-stops">
          {stops > 0
            ? `${stops} ${stops === 1 ? "пересадка" : "пересадки"}`
            : null}

        </div>
        <div className="ticket-info">
          <p className="ticket-time">{arrival_time}</p>
          <p className="ticket-place">
            {destination}, ({destination_name})
          </p>
          <p className="ticket-date">{arrival_date}</p>
        </div>
      </div>
    </div>
  );
};

export default FlightTicket;
