import { Outlet } from "react-router-dom";

import EventNavigation from "../components/EventsNavigation";

function EventsLayout() {
  return (
    <>
      <Outlet />
      <EventNavigation />
    </>
  );
}

export default EventsLayout;
