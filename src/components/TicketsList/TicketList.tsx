import React, { useState, useEffect } from "react";
import FlightTicket from "../FlightTicket/FlightTicket";
import "./TicketList.scss";

interface TicketData {
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

interface TicketListProps {
  filterState: { stops: number[]; currency: "RUB" | "USD" | "EUR" };
}

const TicketList: React.FC<TicketListProps> = ({ filterState }) => {
  const [tickets, setTickets] = useState<TicketData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("./../src/assets/tickets.json");

        if (!response.ok) {
          throw new Error(`Возникла ошибка. Статус: ${response.status}`);
        }

        const data = await response.json();
        setTickets(data.tickets);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredTickets = tickets.filter((ticket) => {
    return (
      filterState.stops.length === 0 || filterState.stops.includes(ticket.stops)
    );
  });

  const sortedTickets = [...filteredTickets].sort((a, b) => a.price - b.price);

  const convertPrice = (price: number, currency: "RUB" | "USD" | "EUR") => {
    if (currency === "RUB") return price;
    if (currency === "USD") return Math.round(price / 103);
    if (currency === "EUR") return Math.round(price / 109);
    return price;
  };

  if (isLoading) {
    return <div>Загрузка список билетов...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return (
    <div className="ticket-list">
      {sortedTickets.map((ticket, index) => (
        <FlightTicket
          key={index}
          {...ticket}
          currency={filterState.currency}
          convertPrice={convertPrice}
        />
      ))}
    </div>
  );
};

export default TicketList;
