import { Outlet } from "react-router-dom";

import EventNavigation from "../components/EventsNavigation";

function EventLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <EventNavigation />
    </>
  );
}

export default EventLayout;
