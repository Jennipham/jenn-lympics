import "./EventInfo.css";
import {
    HiCalendarDays,
    HiClock,
    HiMapPin,
    HiUserGroup
} from "react-icons/hi2";

export default function EventInfo() {

    return (

        <section className="home-event-info">

            <div className="home-event-grid">

                <div className="home-event-card">

                    <div className="home-date-icon">
                        <HiCalendarDays />
                    </div>

                    <h3>Date</h3>

                    <p>Sunday</p>

                    <span>23rd August 2026</span>

                </div>

                <div className="home-event-card">

                    <div className="home-time-icon">
                        <HiClock />
                    </div>

                    <h3>Time</h3>

                    <p>TBC</p>

                    <span>-</span>

                </div>

                <div className="home-event-card">

                    <div className="home-venue-icon">
                        <HiMapPin />
                    </div>

                    <h3>Venue</h3>

                    <p>
                         <a
                         href="https://www.google.com/maps/search/?api=1&query=Crystal+Palace+National+Sports+Centre+SE19+2BB"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="home-venue-link"
                        >
                        Crystal Palace National Sports Centre
                        </a>
                    </p>

                    <span>SE19 2BB</span>

                </div>

                <div className="home-event-card">

                    <div className="home-teams-icon">
                        <HiUserGroup />
                    </div>

                    <h3>Teams</h3>

                    <p>4 Teams</p>

                    <span>24-28 Players</span>

                </div>

            </div>

        </section>

    );

}