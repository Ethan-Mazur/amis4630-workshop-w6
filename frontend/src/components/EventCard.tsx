import { Event } from "../types/types";
import { TicketCounter } from "./TicketCounter";

interface EventCardProps {
    event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const handleTicketCountChange = (count: number) => {
    console.log(`Selected ${count} tickets for ${event.title}`);
    // Here you could add logic to handle ticket selection, like adding to cart
  };

  return (
    <div className="event-card">
      <h2>{event.title}</h2>
      <p className="event-date">Date: {event.date}</p>
      <p className="event-location">Location: {event.location}</p>
      <p className="event-description">{event.description}</p>
      <p>Available Tickets: {event.availableTickets}</p>
      <p className="event-price">Price per ticket: {event.price > 0 ? `$${event.price}` : "free"}</p>
      <TicketCounter maxTickets={event.availableTickets} price={event.price} onCountChange={handleTicketCountChange} />
    </div>
  );
}