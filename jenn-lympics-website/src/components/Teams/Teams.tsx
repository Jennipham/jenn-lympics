import "./Teams.css";
import { RiTeamFill } from "react-icons/ri";


export default function Teams() {

    return (


            <div className="teams-grid">

                <div className="teams-card">
  <div className="teams-header">
    <RiTeamFill className="teams-icon blue" />
    <p className="blue-teams-name">Blue Team</p>
  </div>

  <span>Full List TBC</span>
</div>

<div className="teams-card">
  <div className="teams-header">
    <RiTeamFill className="teams-icon green" />
    <p className="green-teams-name">Green Team</p>
  </div>

  <span>Full List TBC</span>
</div>

<div className="teams-card">
  <div className="teams-header">
    <RiTeamFill className="teams-icon pink" />
    <p className="pink-teams-name">Pink Team</p>
  </div>

  <span>Full List TBC</span>
</div>

<div className="teams-card">
  <div className="teams-header">
    <RiTeamFill className="teams-icon yellow" />
    <p className="yellow-teams-name">Yellow Team</p>
  </div>

  <span>Full List TBC</span>
</div>
            </div>

    );

}