import "./Agenda.css";

type EventProps = {
    event: any;
};

export default function EventCard({ event }: EventProps) {

    const Icon = event.icon;
    const Trophy = event.challengeIcon;
    const Pin = event.locationIcon;
    const Clock = event.timeIcon;

    return (

        <div className="timeline-row">

            <div className="timeline-marker">

                <div
                    className="timeline-circle"
                    style={{ background: event.colour }}
                >
                    {event.number}
                </div>

                <span>{event.time}</span>

                <div className="timeline-line" />

            </div>

            <div className="event-card">

                <div
                    className="event-icon"
                    style={{
                        background: `${event.colour}15`,
                        color: event.colour
                    }}
                >
                    <Icon />
                </div>

                <div className="event-main">

                    <h2>{event.title}</h2>

                    <p>{event.description}</p>

                </div>

                <div className="event-info">
                {event.challenge && (
                    <div>

                        <h4>
                            <Trophy />
                            Mini Challenge
                        </h4>

                        <strong>{event.challenge}</strong>

                        <p>{event.challengeDescription}</p>

                    </div>
                )}

                    <div>

                        <h4>
                            <Pin />
                            Location
                        </h4>

                        <strong>{event.location}</strong>

                    </div>

                    <div>

                        <h4>
                            <Clock />
                            Time
                        </h4>

                        <strong>{event.time}</strong>

                    </div>

                </div>

            </div>

        </div>

    );

}