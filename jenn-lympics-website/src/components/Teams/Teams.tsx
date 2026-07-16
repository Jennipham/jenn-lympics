import "./Teams.css";
import { RiTeamFill } from "react-icons/ri";


export default function Teams() {

    const players = [
        { name: "Jenn", paid: true },
        { name: "Hannah", paid: false },
        { name: "Ines", paid: false },
        { name: "Harry", paid: false },
        { name: "Sami", paid: false },
        { name: "Adama", paid: true },
        { name: "Khalid", paid: false },
        { name: "Kieran", paid: false },
        { name: "Aswini", paid: false },
        { name: "Atulya", paid: false },
        { name: "Tom", paid: false },
        { name: "George", paid: true },
        { name: "Arshvir", paid: false },
        { name: "Dylan", paid: false },
        { name: "Will", paid: false },
        { name: "Achish", paid: false },
        { name: "Jonny", paid: false },
        { name: "Anas", paid: false },
    ];

    return (
        <section className="agenda">

            <h1 className="teams-title">
                The Teams
            </h1>
            <p className="teams-subtitle">
                Teams will be randomly generated with consideration to make the teams as fair as possible
                (although it's obvious Jenn's team will win!)
            </p>

            <div className="players-section">
                <h2>Players</h2>

                <div className="players-key">
                    <div className="key-item">
                        <span className="key-dot paid"></span>
                        <span>Paid</span>
                    </div>

                    <div className="key-item">
                        <span className="key-dot unpaid"></span>
                        <span>Not Paid</span>
                    </div>
                </div>

                <div className="players-list">
                    {players.map((player) => (
                        <span
                            key={player.name}
                            className={`player-pill ${player.paid ? "paid" : "unpaid"}`}
                        >
                            {player.name}
                        </span>
                    ))}
                </div>
            </div>

            <div className="teams-grid">

                <div className="teams-card blue">
                    <div className="teams-header">
                        <RiTeamFill className="teams-icon blue" />
                        <p className="blue-teams-name">Blue Team</p>
                    </div>

                    <span>Full List TBC</span>
                </div>

                <div className="teams-card green">
                    <div className="teams-header">
                        <RiTeamFill className="teams-icon green" />
                        <p className="green-teams-name">Green Team</p>
                    </div>

                    <span>Full List TBC</span>
                </div>

                <div className="teams-card pink">
                    <div className="teams-header">
                        <RiTeamFill className="teams-icon pink" />
                        <p className="pink-teams-name">Pink Team</p>
                    </div>

                    <span>Full List TBC</span>
                </div>

                <div className="teams-card yellow">
                    <div className="teams-header">
                        <RiTeamFill className="teams-icon yellow" />
                        <p className="yellow-teams-name">Yellow Team</p>
                    </div>

                    <span>Full List TBC</span>
                </div>
            </div>
        </section>

    );

}