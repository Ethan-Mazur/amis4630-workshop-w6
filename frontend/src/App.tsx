import { useState } from "react";
import { events } from "./data/events";
import { EventList } from "./components/EventList";
import osLogo from "./assets/Ohio_State_Buckeyes_logo.svg";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredEvents = selectedCategory
    ? events.filter((event) => event.category === selectedCategory)
    : events;

  const categories = Array.from(new Set(events.map((event) => event.category)));

  return (
    <div className="app">
      <div className="title-container">
        <h1>OSU Event Finder</h1>
        <img src={osLogo} alt="Ohio State Buckeyes Logo" className="os-logo" />
      </div>
      <div className="filter-container">
        <button
          onClick={() => setSelectedCategory(null)}
          className={selectedCategory === null ? "active" : ""}
        >
          All Events
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </div>
      <EventList events={filteredEvents} />
    </div>
  );
}

export default App;
