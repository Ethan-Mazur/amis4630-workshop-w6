import { useState } from 'react';

interface TicketCounterProps {
  maxTickets: number;
  price: number;
  onCountChange?: (count: number) => void;
}

export function TicketCounter({ maxTickets, price, onCountChange }: TicketCounterProps) {
  const [count, setCount] = useState(0);
  const totalPrice = count * price;

  const increment = () => {
    if (count < maxTickets) {
      const newCount = count + 1;
      setCount(newCount);
      onCountChange?.(newCount);
    }
  };

  const decrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      onCountChange?.(newCount);
    }
  };

  return (
    <div className="ticket-counter">
      <div className="counter-controls">
        <button onClick={decrement} disabled={count === 0}>-</button>
        <span className="count">{count}</span>
        <button onClick={increment} disabled={count === maxTickets}>+</button>
      </div>
      <div className="selection-summary">
        Tickets selected ({maxTickets} available)
        {count > 0 && (
          <div>
            Total Price: {price > 0 ? `$${totalPrice.toFixed(2)}` : 'free'}
          </div>
        )}
      </div>
    </div>
  );
}
