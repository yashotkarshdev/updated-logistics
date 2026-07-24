import React from "react";
import { useParams } from "react-router-dom";
import { events } from "./events.js";
import EventLayout from "./EventLayout.jsx";

const EventDetails = () => {
  const { id } = useParams();

  const event = events.find((e) => e.id === id);

  return <EventLayout event={event} />;
};

export default EventDetails;