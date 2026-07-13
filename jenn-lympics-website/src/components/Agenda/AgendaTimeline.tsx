import "./Agenda.css";

import { events } from "./events";
import EventCard from "./EventCard";

export default function AgendaTimeline() {

    return (

        <section className="agenda">

            <p className="agenda-tag">
                THE LINE-UP
            </p>

            <h1>
                Events
            </h1>

            <p className="agenda-subtitle">
                 Please be punctual as some events will be are limited to booked times. Before each event, there will be a mini team challenge. 
            </p>
            <div className="timeline">

                {events.map((event) => (
                    <EventCard
                        key={event.number}
                        event={event}
                    />
                ))}

            </div>

        </section>

    );

}