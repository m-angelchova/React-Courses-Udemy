import { Link, useParams } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Event Details</h1>
      <p>{params.id}</p>
      <button>
        <Link to="edit">Edit</Link>
      </button>
    </>
  );
}

export default EventDetailPage;
