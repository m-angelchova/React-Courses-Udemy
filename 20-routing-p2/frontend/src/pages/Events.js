import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    name: "Event 1",
  },
  {
    id: "e2",
    name: "Event 1",
  },
  {
    id: "e3",
    name: "Event 1",
  },
];

function EventsPage() {
  return (
    <>
      <h1>Events</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li>
            <Link to={event.id}>{event.name}</Link>
          </li>
        ))}
      </ul>
      <button>
        <Link to="new">Add Event</Link>
      </button>
    </>
  );
}

export default EventsPage;
