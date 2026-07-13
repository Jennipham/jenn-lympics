import "./Teams.css";
import { RiTeamFill } from "react-icons/ri";


export default function Teams() {

    return (
        <>
            <h1 className="teams-title">
                The Teams
            </h1>
            <p className="teams-subtitle">
                Teams will be randomly generated with consideration to make the teams as fair as possible (Although it's obvious Jenn's team will win!)
            </p>

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
        </>

    );

}