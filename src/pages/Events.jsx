import React, { useState } from "react";
import Nav from "../component/Nav";
import "../styles/events.css";
import { EventDetails } from "../configsFiles/EventDetails";
import EventCard from "../component/EventCard";

const Events = () => {
  const [isopen, setIsOpen] = useState(false);
  const handleclick = (e)=>{
    console.log(e)
  }
  return (
    <div className="event-page">
 
      <Nav />
      <div className="event-container">
        {EventDetails.map((EachDept) => {
          return (
            <>
              <div className="top">
                <div className="title">{EachDept.title}</div>
              </div>
              <div className="wrapper">
                {EachDept.eventslist.map((EachEvent) => {
                  return (
                    <EventCard
                      key={EachEvent.id}
                      {...EachEvent}
                      setIsOpen={setIsOpen}
                      
                    />
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
